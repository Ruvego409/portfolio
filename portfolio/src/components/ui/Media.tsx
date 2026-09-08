/* eslint-disable @next/next/no-img-element -- every asset is a fixed-size
   file already in /public; next/image would add a serverless hop for no gain. */
import type { CSSProperties } from 'react'

import type { MediaItem } from '@/data/types'

import styles from './Media.module.css'

type Props = {
  item: MediaItem
  className?: string
  /** The hero of a page is the LCP element and must not be lazy-loaded. */
  priority?: boolean
  sizes?: string
  /** Crop to a shared aspect ratio, e.g. to line up a row of cards. */
  ratio?: number
}

/**
 * Renders one piece of gallery media at its intrinsic aspect ratio, so the
 * page never reflows once the file arrives. Videos are muted, looping and
 * inline — they are motion graphics, not playable content.
 */
export function Media({ item, className, priority = false, sizes, ratio }: Props) {
  const style: CSSProperties = { ['--ratio' as string]: String(ratio ?? item.ratio) }

  if (item.kind === 'video') {
    return (
      <div className={[styles.frame, className].filter(Boolean).join(' ')} style={style}>
        <video
          className={styles.media}
          src={item.src}
          aria-label={item.alt}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? 'auto' : 'metadata'}
        />
      </div>
    )
  }

  if (item.plate) style.backgroundColor = item.plate

  // A portrait crop swapped in below 700px needs the frame to change shape too,
  // otherwise the box keeps the landscape ratio and crops the phone image.
  if (item.mobileRatio && ratio === undefined) {
    style['--ratio-mobile' as keyof CSSProperties] = String(item.mobileRatio) as never
  }

  const img = (
    <img
      className={styles.media}
      src={item.src}
      alt={item.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      sizes={sizes}
    />
  )

  return (
    <div
      className={[styles.frame, item.plate ? styles.plate : '', className].filter(Boolean).join(' ')}
      style={style}
    >
      {item.mobileSrc ? (
        <picture className={styles.picture}>
          <source media="(max-width: 700px)" srcSet={item.mobileSrc} />
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  )
}
