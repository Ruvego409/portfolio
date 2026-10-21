'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { nav, site } from '@/data/site'
import { LogoMark } from '@/components/ui/Marks'

import styles from './SiteHeader.module.css'

export function SiteHeader() {
  const pathname = usePathname()
  const isSnask = pathname === '/for/snask'

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!isSnask) {
      setIsScrolled(false)
      return
    }

    const checkScroll = () => {
      const hero = document.getElementById('snask-hero')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        // When bottom of hero reaches the header (approx 64px)
        setIsScrolled(rect.bottom <= 64)
      } else {
        const threshold = window.innerHeight * 0.85
        setIsScrolled(window.scrollY > threshold)
      }
    }

    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [isSnask])

  const isDark = isSnask && !isScrolled

  return (
    <header className={`${styles.header} ${isDark ? styles.headerDark : ''}`}>
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
