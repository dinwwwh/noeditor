import { type TElement, createPlateEditor, deserializeHtml } from '@udecode/plate-common'
import { useEffect, useState } from 'react'
import { marked } from 'marked'
import { container } from './app.css'
import { plugins } from './plate/plugins'
import { Editor } from '.'

const markdown = `
paragraph: lorem ipsum

# H1
## H2
### H3
#### H4
##### H5
###### H6

**bold text**

*italicized text*

> blockquote

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

\`code\`

---

[title](https://www.example.com)

![image](https://placehold.co/600x400/EEE/31343C)

| Syntax | Description | 
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

| Syntax | Description | Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Colssssssssssumn 8 | Cossssssssslumn 9 | Column 10 |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Header | Title | Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Column 8 | Column 9 | Column 10 |
| Paragraph | Text | Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Column 8 | Column 9 | Column 10 |
| Paragraph | Text | Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Column 8 | Column 9 | Column 10 |
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
