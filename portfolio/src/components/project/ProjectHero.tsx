import type { Project } from '@/data/types'
import { Media } from '@/components/ui/Media'

import styles from './ProjectHero.module.css'

/**
 * The coloured band at the top of a case study is the same spine the project
 * has on the shelf, opened out to full width — including its decoration.
 */
export function ProjectHero({ project }: { project: Project }) {
  const style = {
    '--band-color': project.bandColor ?? project.color,
    '--mark-color': project.markColor ?? 'currentColor',
  } as React.CSSProperties

  return (
    <>
      <div className={styles.band} style={style}>
        {project.mark === 'stripes' && (
          <>
            <span className={styles.stripes} data-side="start" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className={styles.stripes} data-side="end" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </>
        )}
        {/* Long titles step down a size rather than wrapping to two lines,
            which keeps the band the same height across every case study. */}
        <h1 className={styles.title} data-long={project.title.length > 38 || undefined}>
          {project.title}
        </h1>
      </div>

      {project.hero && <Media item={project.hero} priority sizes="100vw" />}
    </>
  )
}
