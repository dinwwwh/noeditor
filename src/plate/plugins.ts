import { createPlugins } from '@udecode/plate-common'
import { ELEMENT_PARAGRAPH, createParagraphPlugin } from '@udecode/plate-paragraph'
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, createHeadingPlugin } from '@udecode/plate-heading'
import { withProps } from '@udecode/cn'
import { MARK_BOLD, MARK_CODE, MARK_ITALIC, createBoldPlugin, createCodePlugin, createItalicPlugin } from '@udecode/plate-basic-marks'
import { ELEMENT_BLOCKQUOTE, createBlockquotePlugin } from '@udecode/plate-block-quote'
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_UL, createListPlugin } from '@udecode/plate-list'
import { ELEMENT_HR, createHorizontalRulePlugin } from '@udecode/plate-horizontal-rule'
import { ELEMENT_LINK, createLinkPlugin } from '@udecode/plate-link'
import { ELEMENT_IMAGE, createImagePlugin } from '@udecode/plate-media'
import { ParagraphElement } from './paragraph/element'
import { HeadingElement } from './heading/element'
import { BoldMark } from './bold/mark'
import { ItalicMark } from './italic/mark'
import { BlockquoteElement } from './blockquote/element'
import { ListElement, ListItemElement } from './list/element'
import { CodeMark } from './code/mark'
import { HrElement } from './horizontal-rule/element'
import { LinkElement } from './link/element'
import { ImageElement } from './image/element'

export const plugins = createPlugins([
  createParagraphPlugin(),
  createHeadingPlugin(),
  createBoldPlugin(),
  createItalicPlugin(),
  createBlockquotePlugin(),
  createListPlugin(),
  createCodePlugin(),
  createHorizontalRulePlugin(),
  createLinkPlugin(),
  createImagePlugin(),
], {
  components: {
    [ELEMENT_PARAGRAPH]: ParagraphElement,
    [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
    [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
    [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
    [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
    [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
    [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
    [MARK_BOLD]: BoldMark,
    [MARK_ITALIC]: ItalicMark,
    [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
    [ELEMENT_UL]: withProps(ListElement, { variant: 'ul' }),
    [ELEMENT_OL]: withProps(ListElement, { variant: 'ol' }),
    [ELEMENT_LI]: ListItemElement,
    [MARK_CODE]: CodeMark,
    [ELEMENT_HR]: HrElement,
    [ELEMENT_LINK]: LinkElement,
    [ELEMENT_IMAGE]: ImageElement,
  },
})
