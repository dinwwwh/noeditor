import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { u } from '@fizzui/styles'
import type { ButtonState } from './plugin'
import { button } from './element.css'

export const ButtonElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { href, align, size, square } = props.element as unknown as ButtonState

    const Comp = href ? 'a' : 'button'

    return (
      <PlateElement {...props} ref={ref}>
        <Comp href={href} target="_blank" className={`${u.button({ size, square })} ${button({ align })}`}>
          {props.children}
        </Comp>
      </PlateElement>
    )
  },
)
