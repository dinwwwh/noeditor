import { PlateLeaf } from '@udecode/plate-common'
import type React from 'react'
import { forwardRef } from 'react'
import { italic } from './mark.css'

export const ItalicMark = forwardRef((props: React.ComponentPropsWithoutRef<typeof PlateLeaf>, ref: React.ElementRef<typeof PlateLeaf>) => {
  return (
    <PlateLeaf {...props} ref={ref} className={`${italic} ${props.className}`} asChild>
      <em>{props.children}</em>
    </PlateLeaf>
  )
})
