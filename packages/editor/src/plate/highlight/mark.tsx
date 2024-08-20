import { PlateLeaf } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { highlight } from './mark.css'

export const HighlightMark = forwardRef((
  props: React.ComponentPropsWithoutRef<typeof PlateLeaf>,
  ref: React.ElementRef<typeof PlateLeaf>,
) => {
  return (
    <PlateLeaf
      {...props}
      as="mark"
      ref={ref}
      className={`${highlight} ${props.className}`}
    />
  )
})
