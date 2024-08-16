import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { Image } from '@udecode/plate-media'
import { image, imageWrapper } from './element.css'
import { addMissingCssUnit } from '@/utils'

export const ImageElement = forwardRef(
  (
    { nodeProps, ...props }: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const width = props.element.width && (typeof props.element.width === 'number' || typeof props.element.width === 'string')
      ? addMissingCssUnit(props.element.width)
      : undefined

    const height = props.element.height && (typeof props.element.height === 'number' || typeof props.element.height === 'string')
      ? addMissingCssUnit(props.element.height)
      : undefined

    return (
      <PlateElement
        {...props}
        {...nodeProps}
        ref={ref}
        className={`${imageWrapper} ${props.className}`}
      >
        <Image {...nodeProps} className={image} style={{ width, height }} />
        {props.children}
      </PlateElement>
    )
  },
)
