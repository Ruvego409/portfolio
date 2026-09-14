'use client'

import { useEffect, useRef } from 'react'
import type { MediaItem } from '@/data/types'
import styles from './HoverPreview.module.css'

type Props = {
  media: MediaItem
  label: string
  visible: boolean
}

/**
 * A small floating card that follows the cursor and shows either a video
 * or an image preview of the project, plus a "See full project" label.
 *
 * Rendered once at the Bookshelf level and updated by mouse-enter / mouse-leave
 * on each Book, so there is only ever one DOM node regardless of project count.
 */
export function HoverPreview({ media, label, visible }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onMove(e: MouseEvent) {
      if (!el) return
      const offsetX = 20
      const offsetY = -20

      let x = e.clientX + offsetX
      let y = e.clientY + offsetY

      const rect = el.getBoundingClientRect()
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
      <p className={styles.cta}>
        {label} <span aria-hidden="true">→</span>
      </p>
    </div>
  )
}
