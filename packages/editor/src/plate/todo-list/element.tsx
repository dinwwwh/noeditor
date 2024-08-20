import { forwardRef } from 'react'
import { PlateElement } from '@udecode/plate-common'
import {
  useTodoListElement,
  useTodoListElementState,
} from '@udecode/plate-list'
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox'
import { IconCheck } from '@tabler/icons-react'
import { checkbox } from '@fizzui/styles'
import { todoList, todoListContent } from './element.css'

export const TodoListElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { element } = props
    const state = useTodoListElementState({ element })
    const { checkboxProps } = useTodoListElement(state)

    return (
      <PlateElement
        {...props}
        ref={ref}
        className={`${todoList} ${props.className}`}
      >
        <Checkbox {...checkboxProps} contentEditable={false} className={`${checkbox}`}>
          <CheckboxIndicator className={`${checkbox.indicator}`} asChild>
            <IconCheck />
          </CheckboxIndicator>
        </Checkbox>

        <span
          className={`${todoListContent({ checked: state.checked })}`}
          contentEditable={!state.readOnly}
          suppressContentEditableWarning
        >
          {props.children}
        </span>
      </PlateElement>
    )
  },
)
