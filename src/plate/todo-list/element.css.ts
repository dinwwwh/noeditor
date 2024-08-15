import { recipe, rem, style, vars } from '@fizzui/styles'

export const todoList = style({
  display: 'flex',
  paddingTop: rem(3),
  marginBottom: rem(3),

  alignItems: 'center',
  gap: rem(6),
})

export const todoListContent = recipe({
  base: {
    overflow: 'auto',
    overflowWrap: 'break-word',
    lineHeight: rem(24),
    flexGrow: 1,
  },

  variants: {
    checked: {
      true: {
        textDecoration: 'line-through',
        color: vars.fg.base[500],
      },
    },
  },

  defaultVariants: {
    checked: false,
  },
})
