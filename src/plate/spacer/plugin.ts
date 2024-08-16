import { createPluginFactory } from '@udecode/plate-common'
import { isCssUnit } from '@/utils'

export const ELEMENT_SPACER = 'spacer'

export const buildInSizes = ['sm', 'md', 'lg', 'xl'] as const

export interface SpacerElementState {
  type: typeof ELEMENT_SPACER
  size: string
}

export const createSpacerPlugin = createPluginFactory({
  key: ELEMENT_SPACER,
  isElement: true,
  isVoid: true,
  deserializeHtml: {
    rules: [{
      validNodeName: 'NO-SPACER',
    }],
    getNode(el) {
      const rawSize = el.getAttribute('size') ?? el.getAttribute('data-size')
      const size = buildInSizes.find(s => s === rawSize) ?? (rawSize && isCssUnit(rawSize) ? rawSize : 'md')

      return {
        size,
        type: ELEMENT_SPACER,
      } satisfies SpacerElementState
    },
  },
})
