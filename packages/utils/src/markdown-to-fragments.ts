import type { PlateEditor, TElement } from '@udecode/plate-common'
import { deserializeHtml } from '@udecode/plate-common'
import { unified } from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFlexibleMarkers from 'remark-flexible-markers'
import remarkSupersub from 'remark-supersub'

export function markdownToFragments(editor: PlateEditor, markdown: string): TElement[] {
  const html = unified()
    .use(remarkParse)
    .use(remarkGfm, { singleTilde: false })
    .use(remarkFlexibleMarkers)
    .use(remarkSupersub)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(
      supportCustomVoidElements(markdown),
    )
    .toString()

  return deserializeHtml(editor, { element: html.toString() }) as TElement[]
}

function supportCustomVoidElements(html: string): string {
  return html
    .replace(/<(no-[\w-]+) ([^>]*)\/>/g, (_, tag, attrs) => `<${tag} ${attrs}></${tag}>`)
}
