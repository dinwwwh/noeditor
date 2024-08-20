import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { rawHtml } from './element.css'
import type { RawHtmlElementState } from './plugin'

export const RawHtmlElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { html } = props.element as unknown as RawHtmlElementState

    return (
      <PlateElement {...props} ref={ref}>
        {/* eslint-disable-next-line react-dom/no-dangerously-set-innerhtml */}
        <div contentEditable="false" className={rawHtml} dangerouslySetInnerHTML={{ __html: html }} />
        {props.children}
      </PlateElement>
    )
  },
)
