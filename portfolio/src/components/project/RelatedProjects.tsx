import Link from 'next/link'

import type { Project } from '@/data/types'
import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'

import styles from './RelatedProjects.module.css'

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <section className={`container ${styles.section}`} aria-label="More projects">
      <ul className={styles.grid}>
        {projects.map((project, index) => (
          <Reveal as="li" key={project.slug} delay={index * 0.06}>
            <Link href={`/${project.slug}`} className={styles.card}>
              {/* One shared crop keeps the row of cards optically level, which
                  the mixed portrait/landscape source files do not. */}
              <Media
                item={project.card}
                className={styles.media}
                ratio={0.75}
                sizes="(max-width: 760px) 100vw, 32vw"
              />
              <h3 className={styles.title}>{project.cardTitle}</h3>
              <p className={styles.discipline}>{project.discipline}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
