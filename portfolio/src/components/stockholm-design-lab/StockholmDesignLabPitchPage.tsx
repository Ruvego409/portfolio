'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { EASE_OUT_EXPO } from '@/lib/motion'
import styles from './StockholmDesignLabPitchPage.module.css'

interface ProjectItem {
  title: string
  desc: string
  img: string
  alt: string
  slug?: string
  fit?: 'cover' | 'contain'
}

interface CaseComparison {
  id: string
  myProject: ProjectItem
  theirProject: ProjectItem
  matchCol1: string
  matchCol2: string
}

const COMPARISONS: CaseComparison[] = [
  {
    id: 'sheetsolved-viedoc',
    myProject: {
      title: 'SheetSolved',
      slug: 'sheetsolved',
      desc: 'Visual identity and web platform for an Excel automation startup. Built from a 3-sheet coordinate grid, Saans grotesque, and UI data matrices.',
      img: '/media/ktl5UH5AFDMm4JWqXWHLbyPbvg.png',
      alt: 'SheetSolved responsive web interface and landing page design',
      fit: 'contain',
    },
    theirProject: {
      title: 'Viedoc',
      desc: 'Comprehensive brand identity and design system for clinical trial software. Translating complex data workflows into a clinical Scandinavian visual language.',
      img: '/media/sdl/sdl-viedoc-ui.png',
      alt: 'Viedoc clinical data software platform visual identity system by Stockholm Design Lab',
      fit: 'contain',
    },
    matchCol1:
      'Both identities operate at the intersection of dense technical logic and Scandinavian minimalism, rejecting generic SaaS vectors for pure architectural discipline.',
    matchCol2:
      'In Viedoc, SDL turned clinical study data into the primary brand language. In SheetSolved, an abstract interlocking “S” is derived directly from three spreadsheet cell sheets.',
  },
  {
    id: 'lasowiak-omaka',
    myProject: {
      title: 'Lasowiak Cranberry Liqueur',
      slug: 'lasowiak-cranberry-liqueur',
      desc: 'Packaging concept for traditional Polish cranberry liqueur. Reinterprets regional folklore through clinical pharmaceutical typography, an apothecary grid, and hand-folded linen.',
      img: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
      alt: 'Lasowiak cranberry liqueur bottle on raw folk textile',
      fit: 'cover',
    },
    theirProject: {
      title: 'Omaka',
      desc: 'Visual identity and packaging for Stockholm craft brewery Omaka. Built on “irregular elegance” — a disciplined, modular label architecture framing unpredictable liquid experiments.',
      img: '/media/sdl/sdl-omaka-cans.jpg',
      alt: 'Omaka craft brewery identity and packaging system by Stockholm Design Lab',
      fit: 'cover',
    },
    matchCol1:
      'Both projects strip beverage packaging of nostalgic folklore clichés, framing liquid craft through disciplined modular typography and tangible material honesty.',
    matchCol2:
      'Omaka organizes unpredictable craft beers into structured label fields. Lasowiak replaces decorative folk motifs with an apothecary cross grid and raw physical linen.',
  },
  {
    id: 'ubu-orionteatern',
    myProject: {
      title: 'Ubu Roi ou les Polonais',
      slug: 'ubu',
      desc: 'Typographic publication of Alfred Jarry’s absurdist play. Circular cutouts in letterforms and collapsing layout grids mirror the political dissolution of King Ubu’s reign.',
      img: '/media/BjsAOjLC5f3e9YKMBpst1WHBoI.png',
      alt: 'Open spread of Ubu Roi book with deconstructed typography and falling letterforms',
      fit: 'contain',
    },
    theirProject: {
      title: 'Orionteatern',
      desc: 'Visual identity for Stockholm’s avant-garde theatre in a former mechanical factory. Embraces raw industrial scale through bold Futura, kinetic typography, and physical signage.',
      img: '/media/sdl/sdl-orionteatern-posters.jpg',
      alt: 'Orionteatern avant-garde theatre identity and typography by Stockholm Design Lab',
      fit: 'cover',
    },
    matchCol1:
      'Both identities treat typography as an active theatrical participant rather than a neutral text carrier, breaking standard grid rules to mirror physical drama.',
    matchCol2:
      'SDL channeled the raw mechanics of an industrial workshop into kinetic type. In Ubu Roi, typographic anatomy dissolves across spreads in sync with the narrative collapse.',
  },
]

const matchContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
}

const matchColVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE_OUT_EXPO,
    },
  },
}

export function StockholmDesignLabPitchPage() {
  const reduced = useReducedMotion()

  return (
    <div data-sdl-page className={styles.page}>
      <div className={styles.inner}>
        {/* ── Main Page Title ── */}
        <h1 className={styles.pageTitle}>
          Danylo Vasiur &times; Stockholm Design Lab
          <span className={styles.pageSubtitle}>Selected Case Comparisons</span>
        </h1>

        {/* ── Comparison Sections ── */}
        <div className={styles.comparisonsList}>
          {COMPARISONS.map((comp, idx) => (
            <article key={comp.id} className={styles.caseSection}>
              <div className={styles.comparisonGrid}>
                {/* 1. Left Image (Danylo Vasiur) */}
                <div className={styles.leftImage}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={comp.myProject.img}
                      alt={comp.myProject.alt}
                      fill
                      sizes="(max-width: 860px) 100vw, 48vw"
                      className={`${styles.projectImage} ${
                        comp.myProject.fit === 'contain' ? styles.projectImageContain : ''
                      }`}
                      priority={idx === 0}
                    />
                  </div>
                </div>

                {/* 2. Middle Cross Divider */}
                <div className={styles.crossDivider} aria-hidden="true">
                  &times;
                </div>

                {/* 3. Right Image (Stockholm Design Lab) */}
                <div className={styles.rightImage}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={comp.theirProject.img}
                      alt={comp.theirProject.alt}
                      fill
                      sizes="(max-width: 860px) 100vw, 48vw"
                      className={`${styles.projectImage} ${
                        comp.theirProject.fit === 'contain' ? styles.projectImageContain : ''
                      }`}
                      priority={idx === 0}
                    />
                  </div>
                </div>

                {/* 4. Left Info (Name + Description) */}
                <div className={styles.leftInfo}>
                  <h2 className={styles.projectName}>{comp.myProject.title}</h2>
                  <p className={styles.projectDesc}>{comp.myProject.desc}</p>
                </div>

                {/* 5. Right Info (Name + Description) */}
                <div className={styles.rightInfo}>
                  <h2 className={styles.projectName}>{comp.theirProject.title}</h2>
                  <p className={styles.projectDesc}>{comp.theirProject.desc}</p>
                </div>

                {/* 6. Match Block (Large Animated 2-Column Block with Top Divider) */}
                <motion.div
                  className={styles.matchBlock}
                  initial={reduced ? 'visible' : 'hidden'}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={matchContainerVariants}
                >
                  <div className={styles.matchHeader}>
                    <span className={styles.matchTag}>Match</span>
                  </div>

                  <div className={styles.matchGrid}>
                    <motion.div className={styles.matchCol} variants={matchColVariants}>
                      <p className={styles.matchTextLarge}>
                        <strong className={styles.matchPrefix}>Match:</strong> {comp.matchCol1}
                      </p>
                    </motion.div>

                    <motion.div className={styles.matchCol} variants={matchColVariants}>
                      <p className={styles.matchTextLarge}>
                        {comp.matchCol2}
                      </p>
                    </motion.div>
                  </div>

                  {comp.myProject.slug && (
                    <motion.div className={styles.linkWrap} variants={matchColVariants}>
                      <Link href={`/${comp.myProject.slug}`} className={styles.seeFullCase}>
                        See full case &rarr;
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Pitch Closing ── */}
        <footer className={styles.pitchClosing}>
          <p className={styles.closingText}>
            I am Danylo Vasiur, a graphic designer finishing my degree in Kraków. I am drawn to Stockholm Design Lab’s transformational rigor, systematic typography, and ability to turn complex constraints into iconic forms. I am seeking a Junior Designer role in Stockholm.
          </p>
        </footer>
      </div>
    </div>
  )
}
