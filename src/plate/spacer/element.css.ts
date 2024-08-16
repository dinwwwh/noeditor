import { recipe, rem, vars } from '@fizzui/styles'

export const spacer = recipe({
  variants: {
    size: {
      sm: {
        height: rem(8),
      },
      md: {
        height: rem(16),
      },
      lg: {
        height: rem(32),
      },
      xl: {
        height: rem(64),
      },
    },

    selected: {
      true: {
        backgroundColor: vars.bg.base[100],
        borderRadius: vars.radius.sm,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    selected: false,
  },
})
