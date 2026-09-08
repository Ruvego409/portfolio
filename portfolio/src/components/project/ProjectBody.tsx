import type { Project } from '@/data/types'
import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'

import styles from './ProjectBody.module.css'

/**
 * The case-study body: a scrolling gallery column with a sticky rail beside it
 * holding the Problem / Solution / Result narrative. The rail unsticks and
 * moves above the gallery below 900px.
 */
export function ProjectBody({ project }: { project: Project }) {
  return (
    <div className={`container split ${styles.body}`}>
      <div className={styles.gallery}>
        {project.gallery.map((block, blockIndex) => (
          <section key={block.caption ?? blockIndex} className={styles.block}>
            {block.caption && <p className={`label ${styles.caption}`}>{block.caption}</p>}

            <div className={styles.items}>
              {block.items.map((item) => (
                <Reveal as="figure" key={item.src} className={styles.figure}>
                  <Media
                    item={item}
                    className={item.kind === 'image' && item.inset ? styles.inset : undefined}
                    sizes="(max-width: 900px) 100vw, 72vw"
                  />
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        {project.cta && (
          <Reveal>
            <a
              className={styles.cta}
              href={project.cta.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.cta.label}
            </a>
          </Reveal>
        )}
      </div>

      <aside className={styles.rail}>
        <div className={styles.railInner}>
          {project.outcomes.map((outcome) => (
            <Reveal key={outcome.label} className={styles.outcome}>
              <p className="label">{outcome.label}</p>
              <p
                className={styles.outcomeBody}
                dangerouslySetInnerHTML={{ __html: outcome.body }}
              />
            </Reveal>
          ))}
        </div>
      </aside>
    </div>
  )
}
