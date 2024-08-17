import { createAlignPlugin } from '@udecode/plate-alignment'
import { mapInjectPropsToPlugin } from '@udecode/plate-common'
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6 } from '@udecode/plate-heading'
import { ELEMENT_IMAGE } from '@udecode/plate-media'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'
import { ELEMENT_BUTTON } from '../button/plugin'

export const alignPlugin = createAlignPlugin({
  inject: {
    props: {
      validTypes: [
        ELEMENT_PARAGRAPH,
        ELEMENT_H1,
        ELEMENT_H2,
        ELEMENT_H3,
        ELEMENT_H4,
        ELEMENT_H5,
        ELEMENT_H6,
        ELEMENT_IMAGE,
        ELEMENT_BUTTON,
      ],
    },
  },

  then(editor, plugin) {
    return mapInjectPropsToPlugin(editor, plugin, {
      deserializeHtml: {
        getNode: (el, node) => {
          const align = el.style.textAlign || el.getAttribute('align') || el.getAttribute('data-align')

          if (align) {
            node[plugin.key] = align
          }
        },
      },
    })
  },
})
