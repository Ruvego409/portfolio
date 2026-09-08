import { experience } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={`container ${styles.section}`}>
      <Reveal>
        <h2 className={`sectionTitle ${styles.heading}`}>My experience</h2>
      </Reveal>

      <ul className={styles.list}>
        {experience.map((entry, index) => (
          <Reveal as="li" key={entry.company} className={styles.row} delay={index * 0.06}>
            <div className={styles.who}>
              <h3 className={styles.company}>{entry.company}</h3>
              <p className={styles.roles}>
                {entry.roles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </p>
            </div>

            <p className={styles.note}>{entry.note}</p>

            <p className={styles.period}>{entry.period}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
