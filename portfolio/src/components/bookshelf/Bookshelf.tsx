'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

import type { Project } from '@/data/types'
import { bookVariants, plinthVariants } from '@/lib/motion'
import { DanceMuseumMark, LasowiakMark, SheetSolvedMark } from '@/components/ui/Marks'
import { HoverPreview } from './HoverPreview'

import styles from './Bookshelf.module.css'

type Props = {
  projects: Project[]
}

/**
 * The homepage stack. Each project is a "book" laid flat: a coloured spine
 * whose thickness, inset and decoration come from the project data, so the
 * pile keeps its deliberately uneven edge at every viewport width.
 *
 * On load the books fall in from above, top to bottom, one after another.
 * The fall lives on the <li> and the hover lives on the <a>, so the two
 * transforms never fight over the same element.
 *
 * HoverPreview is rendered once here so there is only ever one floating card
 * in the DOM; Books just update the shared state via callbacks.
 */
export function Bookshelf({ projects }: Props) {
  const reduced = useReducedMotion()
  const initial = reduced ? 'static' : 'hidden'
  const animate = reduced ? 'static' : 'visible'

  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)

  return (
    <section className={styles.shelf} aria-label="Selected projects">
      <ul className={styles.stack}>
        {projects.map((project, index) => (
          <motion.li
            key={project.slug}
            className={styles.slot}
            custom={index}
            variants={bookVariants}
            initial={initial}
            animate={animate}
          >
            <Book
              project={project}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          </motion.li>
        ))}
      </ul>

      <motion.div
        className={styles.plinth}
        variants={plinthVariants(projects.length)}
        initial={initial}
        animate={animate}
      >
        <div className={`container ${styles.plinthInner}`}>
          <span>projects</span>
          <span>bookshelf</span>
        </div>
      </motion.div>

      {/* Floating preview card — one instance, updated by hover state */}
      {hoveredProject && (
        <HoverPreview
          media={hoveredProject.card}
          label="See full project"
          visible={Boolean(hoveredProject)}
        />
      )}
    </section>
  )
}

type BookProps = {
  project: Project
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function Book({ project, onMouseEnter, onMouseLeave }: BookProps) {
  const { spine, color, mark, markColor } = project

  const style = {
    '--book-color': color,
    '--book-h': spine.height,
    '--book-left': `${spine.left}%`,
    '--book-right': `${spine.right}%`,
    '--mark-color': markColor ?? 'currentColor',
  } as React.CSSProperties

  return (
    <Link
      href={`/${project.slug}`}
      className={styles.book}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Decoration mark={mark} position="start" />

      <span className={styles.content}>
        <span className={styles.title}>{project.spineTitle}</span>
        <span className={styles.year}>{project.year}</span>
      </span>

      <Decoration mark={mark} position="end" />
    </Link>
  )
}

/**
 * Spine decoration. Ubu Roi and Lasowiak are decorated at both ends; the
 * other marked books carry a single mark at the head of the spine.
 */
function Decoration({ mark, position }: { mark?: Project['mark']; position: 'start' | 'end' }) {
  if (!mark) return null

  if (mark === 'stripes') {
    return (
      <span className={styles.stripes} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    )
  }

  if (mark === 'lasowiak') {
    return <LasowiakMark className={styles.icon} />
  }

  if (position === 'end') return null

  return mark === 'sheetsolved' ? (
    <SheetSolvedMark className={styles.icon} />
  ) : (
    <DanceMuseumMark className={styles.icon} />
  )
}
