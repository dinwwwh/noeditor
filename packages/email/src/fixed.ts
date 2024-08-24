import { u } from '@fizzui/styles'
import { classNameToSelectors } from './utils'

export const FIXED_STYLES = /* css */ `
  ${classNameToSelectors(u.button.__tree.root.classNames.variants.size.sm)} {
    line-height: 26px;
  }

  ${classNameToSelectors(u.button.__tree.root.classNames.variants.size.md)} {
    line-height: 34px;
  }
`
