import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { Image } from '@udecode/plate-media'
import { image, imageWrapper } from './element.css'

export const ImageElement = forwardRef(
  (
    { nodeProps, ...props }: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return (
      <PlateElement {...props} {...nodeProps} ref={ref} className={`${imageWrapper} ${props.className}`}>
        <Image {...nodeProps} className={image} />
        {props.children}
      </PlateElement>
    )
  },
)
