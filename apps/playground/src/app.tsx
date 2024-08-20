import { type TElement, createPlateEditor } from '@udecode/plate-common'
import { useEffect, useState } from 'react'
import { markdownToFragments } from '@noeditor/utils'
import { Editor, plugins } from '@noeditor/editor'
import { container } from './app.css'

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

<no-spacer size="lg" />
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

<iframe  width="560" height="315" src="https://www.youtube.com/embed/bOSWJTu5Prw?si=LTDC3dXJvrmvCmmP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4hgOvTHVDZ35039il5tZDY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<iframe title="Music play pro" src="https://open.spotify.com/embed/track/4hgOvTHVDZ35039il5tZDY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" title="X Post" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1732824684683784516&amp;lang=en&amp;maxWidth=560px&amp;origin=https%3A%2F%2Fpublish.twitter.com%2F%23&amp;sessionId=48c072a05956cddd57d89ca53f1c0bc63ff308d0&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px" style="position: static; visibility: visible; width: 560px; height: 316px; display: block; flex-grow: 1;" data-tweet-id="1732824684683784516"></iframe>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I love these hidden gems for getting logos from any domain 🔗 <a href="https://t.co/uKsPnksPPB">pic.twitter.com/uKsPnksPPB</a></p>&mdash; Pontus Abrahamsson — oss/acc (@pontusab) <a href="https://twitter.com/pontusab/status/1824096594561827264?ref_src=twsrc%5Etfw">August 15, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Frontend developers are officially cooked <a href="https://t.co/gjWwCoPAB8">pic.twitter.com/gjWwCoPAB8</a></p>&mdash; WebDevCody (@webdevcody) <a href="https://twitter.com/webdevcody/status/1825386539154550992?ref_src=twsrc%5Etfw">August 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
<br size=".8rem" />

---
<img src="https://dinwwwh.com/d-avatar.png" width="40" />
`
  .replace(/<br\s+(size[="'a-zA-Z0-9.]*)\s*\/?>/g, (_, size) => `<no-spacer ${size}></no-spacer>`)

const editor = createPlateEditor({ plugins })
const initialValue = markdownToFragments(editor, _markdown_cheat_sheet)

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
