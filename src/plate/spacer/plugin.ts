import { createPluginFactory } from '@udecode/plate-common'

export const ELEMENT_SPACER = 'spacer' as const

const validSize = ['sm', 'md', 'lg', 'xl'] as const

export interface SpacerElementState {
  type: typeof ELEMENT_SPACER
  size: 'sm' | 'md' | 'lg' | 'xl'
}

export const createSpacerPlugin = createPluginFactory({
  key: ELEMENT_SPACER,
  isElement: true,
  isVoid: true,
  deserializeHtml: {
    query(el) {
      return el.tagName === 'NO-SPACER' || el.getAttribute('as')?.toLowerCase() === ELEMENT_SPACER
    },
    getNode(el) {
      const size = el.getAttribute('size')

      return {
        size: validSize.some(h => h === size) ? size : 'md',
        type: ELEMENT_SPACER,
      }
    },
  },
})
