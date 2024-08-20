import { rem, style, vars } from '@fizzui/styles'

export const link = style({
  color: vars.fg.base[900],
  fontWeight: 500,
  textDecoration: 'underline',
  textUnderlineOffset: rem(4),
  lineHeight: rem(20),
})
