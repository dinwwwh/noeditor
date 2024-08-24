import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { getFaviconUrl } from '@editor/utils'
import type { MediaEmbedState } from './plugin'
import {
  mediaEmbedWrapper,
  unknownMediaEmbed,
  unknownMediaEmbedContent,
  unknownMediaEmbedFavicon,
  unknownMediaEmbedLink,
  unknownMediaEmbedTitle,
} from './element.css'

export const MediaEmbedElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { align, info, url: _url } = props.element as unknown as MediaEmbedState
    const url = new URL(_url)

    /** TODO: handle more specific embeds like tweet, instagram, youtube, etc. */

    return (
      <PlateElement {...props} ref={ref} className={`${mediaEmbedWrapper({ align })} ${props.className}`}>
        <div className={`${unknownMediaEmbed}`} contentEditable={false}>
          <img
            src={getFaviconUrl(url.hostname)}
            alt={`favicon of ${url.hostname}`}
            className={`${unknownMediaEmbedFavicon}`}
          />
          <div className={`${unknownMediaEmbedContent}`}>
            {info.title ? <h4 className={`${unknownMediaEmbedTitle}`}>{info.title}</h4> : null}
            <a
              href={url.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`${unknownMediaEmbedLink}`}
            >
              {url.href}
            </a>
          </div>
        </div>
        {props.children}
      </PlateElement>
    )
  },
)
