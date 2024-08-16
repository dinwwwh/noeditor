import { createPluginFactory } from '@udecode/plate-common'

export const ELEMENT_SPACER = 'spacer'

const validSize = ['sm', 'md', 'lg', 'xl'] as const

export interface SpacerElementState {
  type: typeof ELEMENT_SPACER
  size: typeof validSize[number]
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
      const size = validSize.find(s => s === el.getAttribute('size')) ?? 'md'

      return {
        size,
        type: ELEMENT_SPACER,
      } satisfies SpacerElementState
    },
  },
})
