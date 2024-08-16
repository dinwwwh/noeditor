import { PlateElement } from '@udecode/plate-common'
import { useSelected } from 'slate-react'
import { forwardRef } from 'react'
import { type SpacerElementState, buildInSizes } from './plugin'
import { spacer } from './element.css'
import { addMissingCssUnit } from '@/utils'

export const SpacerElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { size } = props.element as unknown as SpacerElementState
    const selected = useSelected()
    const sizeAsBuildIn = buildInSizes.find(s => s === size)

    return (
      <PlateElement
        {...props}
        ref={ref}
        className={`${spacer({ size: sizeAsBuildIn, selected })} ${props.className}`}
        style={{ ...props.style, height: !sizeAsBuildIn ? addMissingCssUnit(size) : undefined }}
      >
        {props.children}
      </PlateElement>
    )
  },
)
