import { recipe, rem } from '@fizzui/styles'

export const heading = recipe({
  variants: {
    variant: {
      h1: {
        fontSize: rem(30),
        lineHeight: rem(39),
        fontWeight: 600,
        paddingTop: rem(32),
        paddingBottom: rem(4),
      },
      h2: {
        fontSize: rem(24),
        lineHeight: rem(31.2),
        fontWeight: 600,
        paddingTop: rem(22.4),
        paddingBottom: rem(1),
      },
      h3: {
        fontSize: rem(20),
        lineHeight: rem(26),
        fontWeight: 600,
        paddingTop: rem(16),
        paddingBottom: rem(1),
      },
      h4: {
        fontSize: rem(16),
        lineHeight: rem(22),
        fontWeight: 600,
        paddingTop: rem(12),
        paddingBottom: rem(1),
      },
      h5: {
        fontSize: rem(14),
        lineHeight: rem(18),
        fontWeight: 600,
        paddingTop: rem(8),
        paddingBottom: rem(1),
      },
      h6: {
        fontSize: rem(12),
        lineHeight: rem(16),
        fontWeight: 600,
        paddingTop: rem(6),
        paddingBottom: rem(1),
      },
    },
  },

  defaultVariants: {
    variant: 'h1',
  },
})
