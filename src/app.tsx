import { type TElement, createPlateEditor, deserializeHtml } from '@udecode/plate-common'
import { useEffect, useState } from 'react'
import { unified } from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFlexibleMarkers from 'remark-flexible-markers'
import remarkSupersub from 'remark-supersub'
import { plugins } from './plate/plugins'
import { container } from './app.css'
import { Editor } from '.'

const _markdown_cheat_sheet = `
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

<no-spacer size="sm"></no-spacer>
<img src="https://placehold.co/600x400/EEE/31343C" width="100" />

<no-spacer size="lg"></no-spacer>
<img src="https://placehold.co/600x400/EEE/31343C" style="width: 100px; height: 200px;" align="center" />

<button align="justify" href="https://www.example.com">Justify with href</button>
<button align="left" size="sm">left size=sm</button>
<button align="right">right</button>
<button align="center" square>center square</button>
<button size="sm">Default align size=sm</button>

<no-rawhtml>
<h1 style="color:blue;">A Blue Heading</h1>
<p style="color:red;">A red paragraph.</p>
</no-rawhtml>

normal
`

const _markdown_email = `
<img src="https://dinwwwh.com/d-avatar.png" width="40" />

---
<br size="md" />

Dear Dinwwwh,
<br />

Are you looking to simplify your email writing process? Introducing a revolutionary approach that allows you to create compelling emails with ease.
<br />

Transform your email communication today! Here's what you can expect:
- Streamlined writing experience
- Intuitive interface
- Time-saving features
<br />
We're building a community of users passionate about efficient communication. Join us in shaping the future of email composition.
Ready to try it out? Click here to get started: [Link](https://dinwwwh.com)
<br />
We look forward to helping you enhance your email writing experience.

<br />

Best regards,


Noeditor!
<br />

---
<img src="https://dinwwwh.com/d-avatar.png" width="40" />
`
  .replace(/<br\s+(size[="a-z]*)\s*\/?>/g, (_, size) => `<no-spacer ${size}></no-spacer>`)

const editor = createPlateEditor({ plugins })
const html = await unified()
  .use(remarkParse)
  .use(remarkGfm, { singleTilde: false })
  .use(remarkFlexibleMarkers)
  .use(remarkSupersub)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeStringify, { allowDangerousHtml: true })
  .process(_markdown_email)
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
