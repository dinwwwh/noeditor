import { ELEMENT_MEDIA_EMBED, createMediaEmbedPlugin } from '@udecode/plate-media'
import type { EmbedInfo } from './parse-embed'
import { parseEmbed } from './parse-embed'

const validAlign = ['left', 'center', 'right', 'justify'] as const

export interface MediaEmbedState {
  type: typeof ELEMENT_MEDIA_EMBED
  url: string
  align: typeof validAlign[number]
  info: EmbedInfo
  width: string
  height: string
}

export const mediaEmbedPlugin = createMediaEmbedPlugin({
  then() {
    return {
      deserializeHtml: {
        query(el) {
          if (el.nodeName !== 'IFRAME') {
            return false
          }

          return Boolean(el.getAttribute('src'))
        },
        getNode(el) {
          const url = el.getAttribute('src') ?? ''
          const rawAlign = el.getAttribute('align') ?? el.getAttribute('data-align') ?? el.style.textAlign
          const align = validAlign.find(a => a === rawAlign) ?? 'center'
          const info = parseEmbed(el)
          const width = el.getAttribute('width') ?? el.style.width
          const height = el.getAttribute('height') ?? el.style.height

          return {
            type: ELEMENT_MEDIA_EMBED,
            url,
            align,
            info,
            width,
            height,
          } satisfies MediaEmbedState
        },
      },
    }
  },
})
