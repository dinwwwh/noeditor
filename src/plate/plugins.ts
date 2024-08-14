import { createPlugins } from '@udecode/plate-common'
import { ELEMENT_PARAGRAPH, createParagraphPlugin } from '@udecode/plate-paragraph'
import { ParagraphElement } from './paragraph/element'

export const plugins = createPlugins([
  createParagraphPlugin(),
], {
  components: {
    [ELEMENT_PARAGRAPH]: ParagraphElement,
  },
})
