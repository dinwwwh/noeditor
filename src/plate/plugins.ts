import { createPlugins } from '@udecode/plate-common'
import { ELEMENT_PARAGRAPH, createParagraphPlugin } from '@udecode/plate-paragraph'
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, createHeadingPlugin } from '@udecode/plate-heading'
import { withProps } from '@udecode/cn'
import { ParagraphElement } from './paragraph/element'
import { HeadingElement } from './heading/element'

export const plugins = createPlugins([
  createParagraphPlugin(),
  createHeadingPlugin(),
], {
  components: {
    [ELEMENT_PARAGRAPH]: ParagraphElement,
    [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
    [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
    [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
    [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
    [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
    [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
  },
})
