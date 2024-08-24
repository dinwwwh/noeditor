export type EmbedInfo = {
  type: 'youtube'
  id: string
  title?: string
} | {
  type: 'vimeo'
  id: string
  title?: string
} | {
  type: 'unknown'
  title?: string
}

export function parseEmbed(element: HTMLElement): EmbedInfo {
  if (element.tagName !== 'IFRAME') {
    return { type: 'unknown' }
  }

  const src = element.getAttribute('src')
  if (!src) {
    return { type: 'unknown' }
  }

  const title = element.getAttribute('title') || undefined

  const youtubeMatch = src.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:embed\/|watch\?v=)?([\w-]+)/)
  if (youtubeMatch) {
    return {
      type: 'youtube',
      id: youtubeMatch[1]!,
      title,
    }
  }

  const vimeoMatch = src.match(/(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeoMatch) {
    return {
      type: 'vimeo',
      id: vimeoMatch[1]!,
      title,
    }
  }

  return { type: 'unknown', title }
}
