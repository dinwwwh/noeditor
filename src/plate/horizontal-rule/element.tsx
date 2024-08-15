import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { useFocused, useSelected } from 'slate-react'
import { hr, hrWrapper } from './element.css'

export const HrElement = forwardRef(
  (
    { nodeProps, ...props }: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const selected = useSelected()
    const focused = useFocused()

    return (
      <PlateElement {...props} ref={ref} className={`${hrWrapper({ selected, focused })} ${props.className}`}>
        <hr
          {...nodeProps}
          className={hr}
        />

        {props.children}
      </PlateElement>
    )
  },
)
