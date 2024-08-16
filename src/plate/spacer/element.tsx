import { PlateElement } from '@udecode/plate-common'
import { useSelected } from 'slate-react'
import { forwardRef } from 'react'
import type { SpacerElementState } from './plugin'
import { spacer } from './element.css'

export const SpacerElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { size } = props.element as unknown as SpacerElementState
    const selected = useSelected()

    return (
      <PlateElement
        {...props}
        ref={ref}
        className={`${spacer({ size, selected })} ${props.className}`}
      >
        {props.children}
      </PlateElement>
    )
  },
)
