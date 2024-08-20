import { recipe, rem, style } from '@fizzui/styles'

export const list = recipe({
  base: {
    paddingInlineStart: rem(24),
    paddingTop: rem(3),
    marginBottom: rem(3),
  },

  variants: {
    variant: {
      ol: {
        listStyleType: 'decimal',
      },
      ul: {
        listStyleType: 'disc',

        selectors: {
          '& &': {
            listStyleType: 'circle',
          },
          '& & &': {
            listStyleType: 'square',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'ul',
  },
})

export const listItem = style({
  paddingTop: rem(3),
  paddingLeft: rem(2),
  paddingBottom: rem(3),
})
