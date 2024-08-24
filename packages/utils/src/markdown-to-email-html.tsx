import fizzuiCss from '@fizzui/styles/css?raw'
import noeditorCss from '@noeditor/editor/css?raw'
import { u } from '@fizzui/styles'

import { Editor, plugins } from '@noeditor/editor'
import { createPlateEditor } from '@udecode/plate-common'
import { renderToString } from 'react-dom/server'
import juice from 'juice'
import { Preview } from '@react-email/preview'
import matter from 'gray-matter'
import { z } from 'zod'
import { markdownToFragments } from './markdown-to-fragments'

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

const FIXED_FIZZUI_ON_EMAIL = /* css */ `
  ${classNameToSelectors(u.button.__tree.root.classNames.variants.size.sm)} {
    line-height: 26px;
  }

  ${classNameToSelectors(u.button.__tree.root.classNames.variants.size.md)} {
    line-height: 34px;
  }
`

interface Options {
  lang?: string
  dir?: string
}

const MARKDOWN_METADATA_SCHEMA = z.object({
  preview: z.coerce.string().optional(),
})

export function markdownToEmailHtml(markdown: string, options?: Options) {
  const editor = createPlateEditor({ plugins })
  const fragments = markdownToFragments(editor, markdown)
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

  const extraCss = `${fizzuiCss} ${noeditorCss} ${GLOBAL_STYLES} ${FIXED_FIZZUI_ON_EMAIL}`
    .replace(
      /([\d.-]+rem)/gi,
      (_, value) => `${Number.parseFloat(value.replace(/rem$/, '')) * 16}px`,
    )

  return juice(html, { extraCss, preserveKeyFrames: false })
}

function classNameToSelectors(className: string): string {
  return className
    .split(/\s+/)
    .map(className => `.${className}`)
    .join('')
}
