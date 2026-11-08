'use client'

import Image from 'next/image'
import Link from 'next/link'
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
  matchDesc: string
}

const COMPARISONS: CaseComparison[] = [
  {
    id: 'sheetsolved-viedoc',
    myProject: {
      title: 'SheetSolved',
      slug: 'sheetsolved',
      desc: 'Visual identity system and Framer-built web platform for an Excel data automation startup. Engineered from a 3-sheet coordinate grid, Saans grotesque typography, and functional digital components directly translating the structural matrix of spreadsheets.',
      img: '/media/ktl5UH5AFDMm4JWqXWHLbyPbvg.png',
      alt: 'SheetSolved responsive web interface and landing page design',
      fit: 'contain',
    },
    theirProject: {
      title: 'Viedoc',
      desc: 'Comprehensive brand identity and digital design system for an advanced clinical trial data software platform. Translating complex regulatory workflows and biometric metrics into a clinical, hyper-structured Scandinavian design language.',
      img: '/media/sdl/sdl-viedoc-ui.png',
      alt: 'Viedoc clinical data software platform visual identity system by Stockholm Design Lab',
      fit: 'contain',
    },
    matchDesc:
      'Both identities operate at the intersection of dense technical logic and Scandinavian minimalism. In Viedoc, Stockholm Design Lab transformed clinical study software by elevating coordinate grids, modular data blocks, and bespoke functional typography into the primary brand language. In SheetSolved, the methodology is identical: rejecting generic SaaS vector decorations in favor of the structural matrix of spreadsheets — an abstract interlocking “S” derived from three cell sheets, framed by mathematical hierarchy.',
  },
  {
    id: 'lasowiak-omaka',
    myProject: {
      title: 'Lasowiak Cranberry Liqueur',
      slug: 'lasowiak-cranberry-liqueur',
      desc: 'Packaging concept for traditional cranberry liqueur from Poland’s Sandomierz Forest: reinterpreting regional folk culture through strict pharmaceutical typography and tactile material craft.',
      img: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
      alt: 'Lasowiak cranberry liqueur bottle on raw folk textile',
      fit: 'cover',
    },
    theirProject: {
      title: 'Omaka',
      desc: 'Visual identity, packaging architecture, and spatial concept for Stockholm craft brewery and restaurant Omaka. Anchored in the principle of “irregular elegance” — disciplined, modular label framing contrasting with unpredictable liquid experiments.',
      img: '/media/sdl/sdl-omaka-cans.jpg',
      alt: 'Omaka craft brewery identity and packaging system by Stockholm Design Lab',
      fit: 'cover',
    },
    matchDesc:
      'Stockholm Design Lab’s work for Omaka is built on the philosophy of “irregular elegance” — a disciplined, repeatable grid of separated label fields that frames the craft of the liquid. Lasowiak applies that exact rigor to Eastern European heritage: stripping away decorative folk ornaments in favor of a clinical apothecary cross grid, contrasted with the raw physical honesty of a hand-folded linen textile wrap.',
  },
  {
    id: 'ubu-orionteatern',
    myProject: {
      title: 'Ubu Roi ou les Polonais',
      slug: 'ubu',
      desc: 'An editorial and typographic exploration of Alfred Jarry’s absurdist 1896 play: cutting holes into letterforms and collapsing layout structures across spreads to mirror the narrative dissolution of Ubu’s kingdom.',
      img: '/media/BjsAOjLC5f3e9YKMBpst1WHBoI.png',
      alt: 'Open spread of Ubu Roi book with deconstructed typography and falling letterforms',
      fit: 'contain',
    },
    theirProject: {
      title: 'Orionteatern',
      desc: 'Visual identity system for Stockholm’s avant-garde performing arts theatre, housed in a former mechanical engineering factory. Embracing the building’s industrial scale through raw typography, dynamic kinetic constellations, and spatial signage.',
      img: '/media/sdl/sdl-orionteatern-posters.jpg',
      alt: 'Orionteatern avant-garde theatre identity and typography by Stockholm Design Lab',
      fit: 'cover',
    },
    matchDesc:
      'Located in a former mechanical workshop, Orionteatern demanded an identity that matched its bold, unconventional stage experiments. SDL bypassed conventional theatre branding, utilizing industrial raw Futura, metal sign lettering, and a dynamic kinetic constellation that disrupts traditional layouts. In Ubu Roi, typographic anatomy undergoes that same theatrical trial: letterforms cease to be neutral carriers of text and become physical performers whose disintegration mirrors the narrative itself.',
  },
]

export function StockholmDesignLabPitchPage() {
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

                {/* 6. Match Block (Full Width) */}
                <div className={styles.matchBlock}>
                  <p className={styles.matchText}>
                    <strong className={styles.matchPrefix}>Match:</strong> {comp.matchDesc}
                  </p>
                  {comp.myProject.slug && (
                    <div className={styles.linkWrap}>
                      <Link href={`/${comp.myProject.slug}`} className={styles.seeFullCase}>
                        See full case
                      </Link>
                    </div>
                  )}
                </div>
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
