import { PlateElement } from '@udecode/plate-common'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { forwardRef } from 'react'
import { list, listItem } from './element.css'

type ListElementProps = React.ComponentPropsWithoutRef<typeof PlateElement> & RecipeVariants<typeof list>

export const ListElement = forwardRef(({ variant = 'ul', ...props }: ListElementProps, ref: React.ElementRef<typeof PlateElement>) => {
  return <PlateElement {...props} as={variant} className={`${list({ variant })} ${props.className}`} ref={ref} />
})

export const ListItemElement = forwardRef((props: React.ComponentPropsWithoutRef<typeof PlateElement>, ref: React.ElementRef<typeof PlateElement>) => {
  return (
    <PlateElement {...props} as="li" ref={ref} className={`${listItem} ${props.className}`} />
  )
})
