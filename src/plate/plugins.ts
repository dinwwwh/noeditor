import { createPlugins } from '@udecode/plate-common'
import { ELEMENT_PARAGRAPH, createParagraphPlugin } from '@udecode/plate-paragraph'
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, createHeadingPlugin } from '@udecode/plate-heading'
import { withProps } from '@udecode/cn'
import { MARK_BOLD, MARK_CODE, MARK_ITALIC, MARK_STRIKETHROUGH, MARK_SUBSCRIPT, MARK_SUPERSCRIPT, createBoldPlugin, createCodePlugin, createItalicPlugin, createStrikethroughPlugin, createSubscriptPlugin, createSuperscriptPlugin } from '@udecode/plate-basic-marks'
import { ELEMENT_BLOCKQUOTE, createBlockquotePlugin } from '@udecode/plate-block-quote'
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_TODO_LI, ELEMENT_UL, createListPlugin, createTodoListPlugin } from '@udecode/plate-list'
import { ELEMENT_HR, createHorizontalRulePlugin } from '@udecode/plate-horizontal-rule'
import { ELEMENT_LINK, createLinkPlugin } from '@udecode/plate-link'
import { ELEMENT_IMAGE, createImagePlugin } from '@udecode/plate-media'
import { ELEMENT_TABLE, ELEMENT_TD, ELEMENT_TH, ELEMENT_TR, createTablePlugin } from '@udecode/plate-table'
import { ELEMENT_CODE_BLOCK, ELEMENT_CODE_LINE, ELEMENT_CODE_SYNTAX } from '@udecode/plate-code-block'
import { MARK_HIGHLIGHT, createHighlightPlugin } from '@udecode/plate-highlight'
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
import { TableDataElement, TableElement, TableHeaderElement, TableRowElement } from './table/element'
import { CodeBlockElement, CodeBlockLineElement, CodeBlockSyntaxLeaf } from './code-block/element'
import { codeBlockPlugin } from './code-block/plugin'
import { StrikethroughMark } from './strikethrough/mark'
import { TodoListElement } from './todo-list/element'
import { HighlightMark } from './highlight/mark'
import { SuperscriptMark } from './superscript/mark'
import { SubscriptMark } from './subscript/mark'
import { alignPlugin } from './align/plugin'
import { imagePlugin } from './image/plugin'

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
  imagePlugin,
  createTablePlugin(),
  codeBlockPlugin,
  createStrikethroughPlugin(),
  createTodoListPlugin(),
  createHighlightPlugin(),
  createSuperscriptPlugin(),
  createSubscriptPlugin(),
  alignPlugin,
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
    [ELEMENT_TABLE]: TableElement,
    [ELEMENT_TR]: TableRowElement,
    [ELEMENT_TH]: TableHeaderElement,
    [ELEMENT_TD]: TableDataElement,
    [ELEMENT_CODE_BLOCK]: CodeBlockElement,
    [ELEMENT_CODE_LINE]: CodeBlockLineElement,
    [ELEMENT_CODE_SYNTAX]: CodeBlockSyntaxLeaf,
    [MARK_STRIKETHROUGH]: StrikethroughMark,
    [ELEMENT_TODO_LI]: TodoListElement,
    [MARK_HIGHLIGHT]: HighlightMark,
    [MARK_SUPERSCRIPT]: SuperscriptMark,
    [MARK_SUBSCRIPT]: SubscriptMark,
  },
})
