import { type TElement, createPlateEditor, deserializeHtml } from '@udecode/plate-common'
import { useEffect, useState } from 'react'
import { unified } from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFlexibleMarkers from 'remark-flexible-markers'
import remarkSupersub from 'remark-supersub'
import rehypeRaw from 'rehype-raw'
import { plugins } from './plate/plugins'
import { container } from './app.css'
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

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

\`\`\`html
<div class="hello">
  <h1>{{ msg }}</h1>
</div>
\`\`\`

~~The world is flat.~~

I need to highlight these ==very important words==.

H~2~O

X^2^

<h1 style="text-align: center">Should be centered</h1>
<h1 align="right">Should be right aligned</h1>
<img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" align="right" />

<img src="https://placehold.co/600x400/EEE/31343C" width="100" />
<img src="https://placehold.co/600x400/EEE/31343C" style="width: 100px; height: 200px;" align="center" />
`

const editor = createPlateEditor({ plugins })
const html = await unified()
  .use(remarkParse)
  .use(remarkGfm, { singleTilde: false })
  .use(remarkFlexibleMarkers)
  .use(remarkSupersub)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeStringify)
  .process(markdown)
// eslint-disable-next-line no-console
console.log(html.toString())
const initialValue = deserializeHtml(editor, { element: html.toString() }) as TElement[]

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
