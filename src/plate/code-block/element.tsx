import { PlateElement, PlateLeaf } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { useCodeSyntaxLeaf } from '@udecode/plate-code-block'
import { codeBlock, codeBlockWrapper } from './element.css.ts'
import { prismRoot } from './prism.css.ts'

export const CodeBlockElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return (
      <PlateElement {...props} ref={ref} className={`${codeBlockWrapper} ${props.className}`}>
        <pre className={`${codeBlock} ${prismRoot}`}>
          <code>{props.children}</code>
        </pre>

        {/* TODO: {state.syntax && (
          <div
            className="absolute right-2 top-2 z-10 select-none"
            contentEditable={false}
          >
            <CodeBlockCombobox />
          </div>
        )} */}
      </PlateElement>
    )
  },
)

export const CodeBlockLineElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    return (
      <PlateElement {...props} ref={ref}>
        {props.children}
      </PlateElement>
    )
  },
)

export const CodeBlockSyntaxLeaf = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateLeaf>,
    ref: React.ElementRef<typeof PlateLeaf>,
  ) => {
    const { tokenProps } = useCodeSyntaxLeaf({ leaf: props.leaf })

    return (
      <PlateLeaf {...props} ref={ref}>
        <span {...tokenProps}>{props.children}</span>
      </PlateLeaf>
    )
  },
)
