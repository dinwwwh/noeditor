import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { match } from 'ts-pattern'
import type { MediaEmbedState } from './plugin'
import { favicon, mediaEmbed, mediaEmbedWrapper, unknownMediaEmbed, unknownMediaEmbedContent, unknownMediaEmbedLink, unknownMediaEmbedTitle, youtubeThumbnail } from './element.css'
import { addMissingCssUnit, getFaviconUrl } from '@/utils'

export const MediaEmbedElement = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<typeof PlateElement>,
    ref: React.ElementRef<typeof PlateElement>,
  ) => {
    const { align, info, width, height, url: _url } = props.element as unknown as MediaEmbedState
    const url = new URL(_url)

    const embed = match(info)
      .with({ type: 'youtube' }, info => (
        <a
          className={`${mediaEmbed}`}
          href={`http://www.youtube.com/watch?feature=player_embedded&v=${info.id}`}
          target="_blank"
          rel="noreferrer noopener"
          contentEditable={false}
        >
          <img
            className={youtubeThumbnail}
            src={`http://img.youtube.com/vi/${info.id}/0.jpg`}
            alt="IMAGE ALT TEXT HERE"
            style={{
              width: width ? addMissingCssUnit(width) : undefined,
              height: height ? addMissingCssUnit(height) : undefined,
            }}
          />

          <img
            src={getFaviconUrl(url.hostname)}
            alt={`favicon of ${url.hostname}`}
            className={`${favicon({ absolute: true })}`}
          />
        </a>
      ))
      .otherwise(() => (
        <div className={`${unknownMediaEmbed}`} contentEditable={false}>
          <img
            src={getFaviconUrl(url.hostname)}
            alt={`favicon of ${url.hostname}`}
            className={`${favicon({ size: 'sm' })}`}
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
      ))

    return (
      <PlateElement {...props} ref={ref} className={`${mediaEmbedWrapper({ align })} ${props.className}`}>
        {embed}
        {props.children}
      </PlateElement>
    )
  },
)
