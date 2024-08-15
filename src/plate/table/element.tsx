import { table } from '@fizzui/styles'
import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { tableWrapper } from './element.css'

export const TableElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return (
      <PlateElement {...props} ref={ref} className={`${tableWrapper} ${props.className}`}>
        <table className={`${table}`}>
          {props.children}
        </table>
      </PlateElement>
    )
  },
)

export const TableRowElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return <PlateElement {...props} as="tr" ref={ref} className={`${table.row} ${props.className}`} />
  },
)

export const TableHeaderElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return <PlateElement {...props} as="th" ref={ref} className={`${table.header} ${props.className}`} />
  },
)

export const TableDataElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return <PlateElement {...props} as="td" ref={ref} className={`${table.data} ${props.className}`} />
  },
)
