import { PlateLeaf } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { subscript } from './mark.css'

export const SubscriptMark = forwardRef((
  props: React.ComponentPropsWithoutRef<typeof PlateLeaf>,
  ref: React.ElementRef<typeof PlateLeaf>,
) => {
  return (
    <PlateLeaf {...props} as="sub" ref={ref} className={`${subscript} ${props.className}`} />
  )
})
