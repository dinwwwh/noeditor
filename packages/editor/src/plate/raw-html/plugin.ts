import { createPluginFactory } from '@udecode/plate-common'

export const ELEMENT_RAW_HTML = 'raw-html'

export interface RawHtmlElementState {
  type: typeof ELEMENT_RAW_HTML
  html: string
}

export const createRawHtmlPlugin = createPluginFactory({
  key: ELEMENT_RAW_HTML,
  isElement: true,
  isVoid: true,
  deserializeHtml: {
    withoutChildren: true,
    rules: [
      { validNodeName: 'NO-RAW-HTML' },
      { validNodeName: 'NO-RAWHTML' },
    ],
    getNode(el) {
      const html = el.innerHTML

      return {
        type: ELEMENT_RAW_HTML,
        html,
      } satisfies RawHtmlElementState
    },
  },
})
