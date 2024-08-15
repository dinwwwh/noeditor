import { forwardRef } from 'react'
import { PlateElement } from '@udecode/plate-common'
import { blockquote } from './element.css'

export const BlockquoteElement = forwardRef(
  ({ children, className, ...props }: React.ComponentPropsWithoutRef<typeof PlateElement>, ref: React.ElementRef<typeof PlateElement>) => {
    return (
      <PlateElement
        {...props}
        ref={ref}
        className={`${blockquote} ${className}`}
        asChild
      >
        <blockquote>{children}</blockquote>
      </PlateElement>
    )
  },
)
