import fizzuiCss from '@fizzui/styles/css?raw'
import noeditorCss from '@noeditor/editor/css?raw'

import { Editor, deserializeMarkdown, plugins } from '@noeditor/editor'
import { createPlateEditor } from '@udecode/plate-common'
import { renderToString } from 'react-dom/server'
import juice from 'juice'
import { Preview } from '@react-email/preview'
import matter from 'gray-matter'
import { z } from 'zod'
import { FIXED_STYLES } from './fixed'

const GLOBAL_STYLES = /* css */ `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: auto;
    max-width: 592px;
    padding: 16px 16px 28px;
  }

  code, kbd, samp, pre {
    font-family: monospace !important;
  }
`

interface Options {
  lang?: string
  dir?: string
  extraCss?: string
}

const MARKDOWN_METADATA_SCHEMA = z.object({
  preview: z.coerce.string().optional(),
})

export function convertMarkdownToEmailStyledHtml(markdown: string, options?: Options) {
  const editor = createPlateEditor({ plugins })
  const fragments = deserializeMarkdown(editor, markdown)
  const metadata = MARKDOWN_METADATA_SCHEMA.parse(matter(markdown).data)

  const html = renderToString(
    <html lang={options?.lang || 'en'} dir={options?.dir || 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        {metadata.preview ? <Preview>{metadata.preview}</Preview> : null}
        <Editor initialValue={fragments} readOnly />
      </body>
    </html>,
  )

  const extraCss = `${fizzuiCss} ${noeditorCss} ${GLOBAL_STYLES} ${FIXED_STYLES} ${options?.extraCss || ''}`
    .replace(
      /([\d.-]+rem)/gi,
      (_, value) => `${Number.parseFloat(value.replace(/rem$/, '')) * 16}px`,
    )

  return juice(html, { extraCss, preserveKeyFrames: false })
}
