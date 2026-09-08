import Link from 'next/link'

import { nav, site } from '@/data/site'
import { LogoMark } from '@/components/ui/Marks'

import styles from './SiteHeader.module.css'

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} — home`}>
          <LogoMark className={styles.logo} />
          <span className={styles.brandName}>{site.name}</span>
        </Link>

        <nav aria-label="Main">
          <ul className={styles.nav}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
