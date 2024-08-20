import { PlateElement } from '@udecode/plate-common'
import type { RecipeVariants } from '@vanilla-extract/recipes'
import { forwardRef } from 'react'
import { heading } from './element.css'

type HeadingElementProps = React.ComponentPropsWithoutRef<typeof PlateElement> & RecipeVariants<typeof heading>

export const HeadingElement = forwardRef(({ variant, ...props }: HeadingElementProps, ref: React.ElementRef<typeof PlateElement>) => {
  const Heading = variant ?? 'h1'

  return (
    <PlateElement {...props} className={`${heading({ variant })} ${props.className}`} ref={ref} asChild>
      <Heading>{props.children}</Heading>
    </PlateElement>
  )
})
