import { PlateLeaf } from '@udecode/plate-common'
import type React from 'react'
import { forwardRef } from 'react'
import { bold } from './mark.css'

export const BoldMark = forwardRef((props: React.ComponentPropsWithoutRef<typeof PlateLeaf>, ref: React.ElementRef<typeof PlateLeaf>) => {
  return (
    <PlateLeaf {...props} ref={ref} className={`${bold} ${props.className}`} asChild>
      <strong>{props.children}</strong>
    </PlateLeaf>
  )
})
