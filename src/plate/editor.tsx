import { Plate, PlateContent } from '@udecode/plate-common'
import { content } from './editor.css'
import { plugins } from './plugins'

type EmailEditorProps = Omit<React.ComponentPropsWithoutRef<typeof Plate>, 'children' | 'plugins'>

export function Editor(props: EmailEditorProps) {
  return (
    <Plate {...props} plugins={plugins}>
      <PlateContent className={content} />
    </Plate>
  )
}
