import { rem, style, vars } from '@fizzui/styles'

export const codeBlockWrapper = style({
  paddingTop: rem(4),
  marginBottom: rem(4),
})

export const codeBlock = style({
  overflow: 'auto',
  borderRadius: vars.radius.md,
  backgroundColor: vars.bg.base[100],
  padding: `${rem(32)} ${rem(24)}`,
  fontSize: rem(14),
  lineHeight: rem(20),
  tabSize: 2,
})
