import { rem, style, vars } from '@fizzui/styles'

export const imageWrapper = style({
  marginTop: rem(4),
  marginBottom: rem(4),
})

export const image = style({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: vars.radius.md,
})
