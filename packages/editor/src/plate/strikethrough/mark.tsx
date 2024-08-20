import { PlateLeaf } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { strikethrough } from './mark.css'

export const StrikethroughMark = forwardRef((
  props: React.ComponentPropsWithoutRef<typeof PlateLeaf>,
  ref: React.ElementRef<typeof PlateLeaf>,
) => {
  return (
    <PlateLeaf {...props} as="s" ref={ref} className={`${strikethrough} ${props.className}`} />
  )
})
