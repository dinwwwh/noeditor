// eslint-disable-next-line no-restricted-imports
import { globalStyle, style } from '@vanilla-extract/css'

export const prismRoot = style({})

const selector = `.${prismRoot}`

globalStyle(selector, {
  background: 'hsl(230, 1%, 98%)',
  color: 'hsl(230, 8%, 24%)',
  direction: 'ltr',
  textAlign: 'left',
  whiteSpace: 'pre',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  lineHeight: 1.5,
  tabSize: 2,
  hyphens: 'none',
})

// Selection styles
globalStyle(`${selector}::selection, ${selector} *::selection`, {
  background: 'hsl(230, 1%, 90%)',
  color: 'inherit',
})

// Code block styles
globalStyle(`${prismRoot} pre[class*='language-']`, {
  padding: '1em',
  margin: '0.5em 0',
  overflow: 'auto',
  borderRadius: '0.3em',
})

// Inline code styles
globalStyle(`${prismRoot} :not(pre) > code[class*='language-']`, {
  padding: '0.2em 0.3em',
  borderRadius: '0.3em',
  whiteSpace: 'normal',
})

// Token styles
globalStyle(`${selector} .token.comment, ${selector} .token.prolog, ${selector} .token.cdata`, {
  color: 'hsl(230, 4%, 64%)',
})

globalStyle(`${selector} .token.doctype, ${selector} .token.punctuation, ${selector} .token.entity`, {
  color: 'hsl(230, 8%, 24%)',
})

globalStyle(`${selector} .token.attr-name, ${selector} .token.class-name, ${selector} .token.boolean, ${selector} .token.constant, ${selector} .token.number, ${selector} .token.atrule`, {
  color: 'hsl(35, 99%, 36%)',
})

globalStyle(`${selector} .token.keyword`, {
  color: 'hsl(301, 63%, 40%)',
})

globalStyle(`${selector} .token.property, ${selector} .token.tag, ${selector} .token.symbol, ${selector} .token.deleted, ${selector} .token.important`, {
  color: 'hsl(5, 74%, 59%)',
})

globalStyle(`${selector} .token.selector, ${selector} .token.string, ${selector} .token.char, ${selector} .token.builtin, ${selector} .token.inserted, ${selector} .token.regex, ${selector} .token.attr-value, ${selector} .token.attr-value > .token.punctuation`, {
  color: 'hsl(119, 34%, 47%)',
})

globalStyle(`${selector} .token.variable, ${selector} .token.operator, ${selector} .token.function`, {
  color: 'hsl(221, 87%, 60%)',
})

globalStyle(`${selector} .token.url`, {
  color: 'hsl(198, 99%, 37%)',
})

// HTML overrides
globalStyle(`${selector} .token.attr-value > .token.punctuation.attr-equals, ${selector} .token.special-attr > .token.attr-value > .token.value.css`, {
  color: 'hsl(230, 8%, 24%)',
})

// CSS overrides
globalStyle(`${selector} .language-css .token.selector`, {
  color: 'hsl(5, 74%, 59%)',
})

globalStyle(`${selector} .language-css .token.property`, {
  color: 'hsl(230, 8%, 24%)',
})

globalStyle(`${selector} .language-css .token.function, ${selector} .language-css .token.url > .token.function`, {
  color: 'hsl(198, 99%, 37%)',
})

globalStyle(`${selector} .language-css .token.url > .token.string.url`, {
  color: 'hsl(119, 34%, 47%)',
})

globalStyle(`${selector} .language-css .token.important, ${selector} .language-css .token.atrule .token.rule`, {
  color: 'hsl(301, 63%, 40%)',
})

// JS overrides
globalStyle(`${selector} .language-javascript .token.operator`, {
  color: 'hsl(301, 63%, 40%)',
})

globalStyle(`${selector} .language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation`, {
  color: 'hsl(344, 84%, 43%)',
})

// JSON overrides
globalStyle(`${selector} .language-json .token.operator`, {
  color: 'hsl(230, 8%, 24%)',
})

globalStyle(`${selector} .language-json .token.null.keyword`, {
  color: 'hsl(35, 99%, 36%)',
})

// General styles
globalStyle(`${selector} .token.bold`, {
  fontWeight: 'bold',
})

globalStyle(`${selector} .token.comment, ${selector} .token.italic`, {
  fontStyle: 'italic',
})

globalStyle(`${selector} .token.entity`, {
  cursor: 'help',
})

globalStyle(`${selector} .token.namespace`, {
  opacity: 0.8,
})
