import type { TElement } from '@udecode/plate-common'
import { Plate, PlateContent } from '@udecode/plate-common'
import { content } from './editor.css'

export interface EmailEditorProps {
  initialValue?: TElement[]
  onChange?: (value: TElement[]) => void
}

export function Editor({ initialValue, onChange }: EmailEditorProps) {
  return (
    <Plate initialValue={initialValue} onChange={onChange}>

      <PlateContent className={content} />
    </Plate>
  )
}
