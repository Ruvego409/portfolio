import Link from 'next/link'

import { socials } from '@/data/site'
import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'
import { ArrowCircle } from '@/components/ui/Marks'

import styles from './AboutTeaser.module.css'

const portrait = {
  kind: 'image',
  src: '/media/Rj1qeQOeefFaAhfVvneggTY.jpg',
  ratio: 0.817,
  alt: 'Danylo Vasiur photographed outdoors in winter',
} as const

export function AboutTeaser() {
  return (
    <section className={`container ${styles.section}`}>
      <Reveal>
        <h2 className={`sectionTitle ${styles.heading}`}>
          <Link href="/about-me" className={styles.headingLink}>
            About me
          </Link>
        </h2>
      </Reveal>

      <div className={styles.body}>
        <Reveal className={styles.portraitColumn}>
          <Media item={portrait} className={styles.portrait} sizes="(max-width: 900px) 100vw, 30vw" />
          <p className={styles.caption}>
            <span>Always looking</span>
            <span>for creative projects</span>
          </p>
        </Reveal>

        <Reveal className={styles.textColumn} delay={0.08}>
          <p className={`lead ${styles.copy}`}>
            From idea to execution, I handle every step myself. Over the past 2 years, I&rsquo;ve been
            building brand identities and digital design that are thoughtful, sharp, and made to work.
            One designer, full attention, real results.
          </p>

          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  className={styles.socialLink}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {social.label}
                  <ArrowCircle className={styles.socialIcon} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
