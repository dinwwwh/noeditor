import { recipe, rem, style, vars } from '@fizzui/styles'

export const hrWrapper = recipe({
  base: {
    paddingTop: rem(6),
    paddingBottom: rem(6),
    cursor: 'default',
  },

  variants: {
    selected: {
      true: {},
    },
    focused: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: { selected: true, focused: true },
      style: {
        backgroundColor: vars.bg.base[100],
        borderRadius: vars.radius.sm,
      },
    },
  ],

  defaultVariants: {
    selected: false,
    focused: false,
  },
})

export const hr = style({
  height: rem(1),
  backgroundColor: vars.border.base[200],
})
