import { type TElement, createPlateEditor, deserializeHtml } from '@udecode/plate-common'
import { useEffect, useState } from 'react'
import { marked } from 'marked'
import { container } from './app.css'
import { plugins } from './plate/plugins'
import { Editor } from '.'

const markdown = `
paragraph: lorem ipsum
`

const editor = createPlateEditor({ plugins })
const html = await marked.parse(markdown)
const initialValue = deserializeHtml(editor, { element: html }) as TElement[]

export function App() {
  const [value, setValue] = useState<TElement[] | undefined>()

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(value)
  }, [value])

  return (
    <div className={container}>
      <Editor initialValue={initialValue} onChange={setValue} />
    </div>
  )
}
