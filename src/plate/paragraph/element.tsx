import { PlateElement, withRef } from '@udecode/plate-common'
import { paragraph } from './element.css'

export const ParagraphElement = withRef<typeof PlateElement>(({ children, className, ...props }, ref) => {
  return (
    <PlateElement {...props} ref={ref} asChild>
      <p className={`${paragraph} ${className}`}>{children}</p>
    </PlateElement>
  )
})
