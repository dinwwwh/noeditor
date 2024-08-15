import { rem, style, vars } from '@fizzui/styles'

export const code = style({
  whiteSpace: 'pre-wrap',
  borderRadius: vars.radius.sm,
  padding: `${rem(2.72)} ${rem(5.44)}`,
  fontSize: rem(13.6),
  backgroundColor: vars.bg.base[100],
  color: vars.fg.base[800],
})
