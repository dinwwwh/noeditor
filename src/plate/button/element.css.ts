import { recipe } from '@fizzui/styles'

export const button = recipe({
  base: {
    textDecoration: 'none',
  },

  variants: {
    align: {
      left: {},
      center: {},
      right: {},
      justify: {
        width: '100%',
      },
    },
  },

  defaultVariants: {},
})
