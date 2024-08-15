import { PlateLeaf } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { code } from './mark.css'

export const CodeMark = forwardRef(
  (props: React.ComponentPropsWithoutRef<typeof PlateLeaf>, ref: React.ElementRef<typeof PlateLeaf>) => {
    return (
      <PlateLeaf
        {...props}
        as="code"
        ref={ref}
        className={`${code} ${props.className}`}
      />
    )
  },
)
