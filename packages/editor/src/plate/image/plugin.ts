import { createImagePlugin } from '@udecode/plate-media'

export const imagePlugin = createImagePlugin({
  then: (_editor, { type }) => ({
    deserializeHtml: {
      getNode: el => ({
        type,
        url: el.getAttribute('src'),
        width: el.getAttribute('width') || el.style.width,
        height: el.getAttribute('height') || el.style.height,
      }),
    },
  }),
})
