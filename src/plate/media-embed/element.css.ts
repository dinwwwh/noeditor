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

export const mediaEmbed = style({
  borderRadius: vars.radius.md,
  overflow: 'hidden',
  position: 'relative',
})

export const youtubeThumbnail = style({
  objectFit: 'cover',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: vars.radius.md,
})

export const favicon = recipe({
  variants: {
    absolute: {
      true: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        userSelect: 'none',
      },
    },
    size: {
      sm: {
        maxHeight: rem(20),
        maxWidth: rem(20),
      },
      md: {
        maxHeight: rem(50),
        maxWidth: rem(50),
      },
    },
  },

  defaultVariants: {
    absolute: false,
    size: 'md',
  },
})

export const unknownMediaEmbed = style({
  width: '100%',
  padding: `${rem(16)} ${rem(20)}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.bg.base[100],

  display: 'flex',
  alignItems: 'center',
  gap: rem(12),
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
