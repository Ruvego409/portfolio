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
 * A floating card that follows the cursor and shows either a video
 * or an image preview of the project, plus a "See full project" label.
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
      const offsetX = 16
      const rect = el.getBoundingClientRect()

      let x = e.clientX + offsetX

      let y: number
      if (anchorRef.current === 'below') {
        y = e.clientY + 16
      } else {
        y = e.clientY - rect.height - 16
      }

      if (x + rect.width > window.innerWidth - 8) {
        x = e.clientX - rect.width - offsetX
      }

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
            <path d="M1.5 5h7M5.5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  )
}
