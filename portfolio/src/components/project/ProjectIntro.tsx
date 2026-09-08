import type { Project } from '@/data/types'
import { Reveal } from '@/components/ui/Reveal'

import styles from './ProjectIntro.module.css'

/** Metadata row (type / year / context) followed by the project overview. */
export function ProjectIntro({ project }: { project: Project }) {
  return (
    <div className={`container ${styles.intro}`}>
      <Reveal>
        <dl className={styles.meta}>
          {project.meta.map((field) => (
            <div key={field.label} className={styles.metaField}>
              <dt className="label">{field.label}</dt>
              {field.values.map((value) => (
                <dd key={value} className={styles.metaValue}>
                  {value}
                </dd>
              ))}
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="label">Project overview:</p>
        <p
          className={`lead ${styles.overview}`}
          dangerouslySetInnerHTML={{ __html: project.overview }}
        />
      </Reveal>
    </div>
  )
}
