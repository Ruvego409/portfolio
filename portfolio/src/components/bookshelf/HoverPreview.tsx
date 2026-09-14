'use client'

import { useEffect, useRef } from 'react'
import type { MediaItem } from '@/data/types'
import styles from './HoverPreview.module.css'

type Props = {
  media: MediaItem
  label: string
  visible: boolean
  /** 'below' places the card below the cursor, 'above' places it above. */
  anchor: 'above' | 'below'
}

/**
 * A small floating card that follows the cursor and shows either a video
 * or an image preview of the project, plus a "See full project" label.
 *
 * Rendered once at the Bookshelf level and updated by mouse-enter / mouse-leave
 * on each Book, so there is only ever one DOM node regardless of project count.
 */
export function HoverPreview({ media, label, visible, anchor }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const anchorRef = useRef(anchor)
  anchorRef.current = anchor

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onMove(e: MouseEvent) {
      if (!el) return
      const offsetX = 20
      const rect = el.getBoundingClientRect()

      let x = e.clientX + offsetX

      let y: number
      if (anchorRef.current === 'below') {
        // Card appears below the cursor
        y = e.clientY + 20
      } else {
        // Card appears above the cursor
        y = e.clientY - rect.height - 20
      }

      // Keep the card inside the viewport horizontally
      if (x + rect.width > window.innerWidth - 8) {
        x = e.clientX - rect.width - offsetX
      }

      // Keep the card inside the viewport vertically
      if (y + rect.height > window.innerHeight - 8) {
        y = window.innerHeight - rect.height - 8
      }
      if (y < 8) y = 8

      el.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.preview} ${visible ? styles.visible : ''}`}
      aria-hidden="true"
    >
      <div className={styles.media}>
        {media.kind === 'video' ? (
          <video
            key={media.src}
            src={media.src}
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={media.src}
            src={media.src}
            alt={media.alt}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.cta}>
        <span className={styles.ctaLabel}>{label}</span>
        <span className={styles.ctaCircle}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  )
}
