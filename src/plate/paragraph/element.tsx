import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { paragraph } from './element.css'

export const ParagraphElement = forwardRef(
  (
    { children, className, ...props }: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return (
      <PlateElement {...props} ref={ref} asChild>
        <p className={`${paragraph} ${className}`}>{children}</p>
      </PlateElement>
    )
  },
)
