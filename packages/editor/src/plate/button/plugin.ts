import { createPluginFactory } from '@udecode/plate-common'

export const ELEMENT_BUTTON = 'button'

const validAlign = ['left', 'center', 'right', 'justify'] as const
const validSize = ['sm', 'md'] as const

export interface ButtonState {
  type: typeof ELEMENT_BUTTON
  href?: string
  align: typeof validAlign[number]
  size: typeof validSize[number]
  square: boolean
}

export const createButtonPlugin = createPluginFactory({
  key: ELEMENT_BUTTON,
  isElement: true,
  deserializeHtml: {
    rules: [{
      validNodeName: 'BUTTON',
    }],
    getNode(el) {
      const href = (el.getAttribute('href') ?? el.getAttribute('data-href')) ?? undefined
      const align = validAlign.find(a => a === (el.getAttribute('align') ?? el.getAttribute('data-align'))) ?? 'center'
      const size = validSize.find(s => s === (el.getAttribute('size') ?? el.getAttribute('data-size'))) ?? 'md'
      const square = ['', 'true'].some(s => s === (el.getAttribute('square') ?? el.getAttribute('data-square')))

      return {
        href,
        align,
        size,
        square,
        type: ELEMENT_BUTTON,
      } satisfies ButtonState
    },
  },
})
