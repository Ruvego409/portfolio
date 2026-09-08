import Link from 'next/link'

import { footerPages, site, socials } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Reveal className={`container ${styles.inner}`}>
        <div className={styles.details}>
          <p>
            email:&nbsp;
            <a className={styles.link} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>based in: {site.location}</p>
          <p>available for: {site.availability}</p>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          <div className={styles.column}>
            <p className={styles.columnTitle}>pages</p>
            <ul>
              {footerPages.map((page) => (
                <li key={page.href}>
                  <Link className={styles.link} href={page.href}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>socials</p>
            <ul>
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    className={styles.link}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {social.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Reveal>

      {/* Oversized wordmark: scales with the viewport via SVG rather than a
          font-size calculation, so it always spans the full gutter width. */}
      <div className={`container ${styles.wordmarkWrap}`}>
        <svg
          className={styles.wordmark}
          viewBox="0 0 1160 200"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
        >
          <text x="0" y="152" textLength="1160" lengthAdjust="spacingAndGlyphs">
            {site.name}
          </text>
        </svg>
      </div>
    </footer>
  )
}
