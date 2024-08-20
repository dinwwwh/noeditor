import { createCodeBlockPlugin, deserializeHtmlCodeBlock } from '@udecode/plate-code-block'
import { prism } from './prism'

export const codeBlockPlugin = createCodeBlockPlugin({
  deserializeHtml: {
    ...deserializeHtmlCodeBlock,
    getNode: (el, _node) => {
      const node = deserializeHtmlCodeBlock?.getNode?.(el, _node) ?? {}

      const lang: string | null = node.lang || (() => {
        const codeEl = el.querySelector('code')

        if (!codeEl) {
          return
        }

        const className = codeEl.className
        const match = className.match(/language-(\w+)/)
        return match?.[1] ?? undefined
      })()

      return {
        ...node,
        lang,
      }
    },
  },
  options: {
    prism,
  },
})
