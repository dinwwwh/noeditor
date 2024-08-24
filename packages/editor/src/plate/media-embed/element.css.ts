import { recipe, rem, style, vars } from '@fizzui/styles'
import { link } from '../link/element.css'

export const mediaEmbedWrapper = recipe({
  base: {
    display: 'flex',
    paddingTop: rem(3),
    marginBottom: rem(3),
  },

  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
      justify: {},
    },
  },

  defaultVariants: {
    align: 'center',
  },
})

export const unknownMediaEmbed = style({
  width: '100%',
  padding: `${rem(16)} ${rem(20)}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.bg.base[100],

  display: 'flex',
  alignItems: 'center',
})

export const unknownMediaEmbedFavicon = style({
  maxHeight: rem(20),
  maxWidth: rem(20),
  marginRight: rem(12),
})

export const unknownMediaEmbedContent = style({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

export const unknownMediaEmbedTitle = style({
  fontWeight: 500,
  marginBottom: rem(6),
  color: vars.fg.base[950],
})

export const unknownMediaEmbedLink = style([link])
