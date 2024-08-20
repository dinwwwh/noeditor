import { PlateElement } from '@udecode/plate-common'
import { type TLinkElement, useLink } from '@udecode/plate-link'
import { forwardRef } from 'react'
import { link } from './element.css'

export const LinkElement = forwardRef(
  (
    { ...props }: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { props: linkProps } = useLink({ element: props.element as TLinkElement })

    return (
      <PlateElement
        {...props}
        {...(linkProps as any)}
        as="a"
        ref={ref}
        className={`${link} ${props.className}`}
      />
    )
  },
)
