import { PlateLeaf } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { superscript } from './mark.css'

export const SuperscriptMark = forwardRef((
  props: React.ComponentPropsWithoutRef<typeof PlateLeaf>,
  ref: React.ElementRef<typeof PlateLeaf>,
) => {
  return (
    <PlateLeaf {...props} as="sup" ref={ref} className={`${superscript} ${props.className}`} />
  )
})
