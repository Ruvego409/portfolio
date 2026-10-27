'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './LundgrenLindqvistPitchPage.module.css'

interface CasePair {
  myProject: {
    title: string
    slug: string
    desc: string
    clientContext: string
    type: string
    year: string
    img: string
    imgW: number
    imgH: number
  }
  theirProject: {
    title: string
    type: string
    img: string
    imgW: number
    imgH: number
  }
  matchTitle: string
  matchDesc: string
}

const PAIRS: CasePair[] = [
  {
    myProject: {
      title: 'Bruno Jasieński — Akta №',
      slug: 'aktan',
      desc: 'An archival editorial publication confronting historical erasure through raw charcoal illustrations, inverted typographic spreads, and tactile binding decisions.',
      clientContext: 'Self-initiated / University project',
      type: 'Editorial Design & Book',
      year: '2026',
      img: '/media/VocXQQCXA7epkcS8eluPo9Gt8.png',
      imgW: 1500,
      imgH: 1000,
    },
    theirProject: {
      title: 'Static Motion — Carl Ander (LL\'Editions)',
      type: 'Publication & Monograph',
      img: '/media/lundgren-lindqvist/ll-static-motion.jpg',
      imgW: 1500,
      imgH: 1000,
    },
    matchTitle: 'Editorial as physical object, not container.',
    matchDesc: 'Both approach the book as an architectural artifact with psychological mass. In Akta №, raw charcoal gestures stand in for historical erasure — the editorial design does not illustrate, it implicates. In Static Motion, Lundgren+Lindqvist strip conventional apparatus and let the tactile sequence do the work. The methodology is identical: form as the argument.',
  },
  {
    myProject: {
      title: 'Warsaw Museum of Dance and Movement',
      slug: 'mtrw',
      desc: 'A structural visual identity built from a single geometric primitive: the circle as the universal spatial constraint of human movement across centuries.',
      clientContext: 'Cultural Institution (imaginary)',
      type: 'Visual Identity & Wayfinding',
      year: '2025',
      img: '/media/cUvL4YuhIciQHNXKYHUySSau5k.png',
      imgW: 1500,
      imgH: 1000,
    },
    theirProject: {
      title: 'Inflection — Visual Identity System',
      type: 'Visual Identity & Design System',
      img: '/media/lundgren-lindqvist/ll-inflection-identity.jpg',
      imgW: 1500,
      imgH: 1000,
    },
    matchTitle: 'Identity as architecture, not decoration.',
    matchDesc: 'Lundgren+Lindqvist\'s institutional systems function like architectural blueprints: strict geometric framing, modular hierarchies, and typographic discipline designed for permanence. The MTRW identity follows the same rigor — one circle, one weight, one colour — scaled from sub-centimetre admission badges to multi-storey facade wayfinding in concrete.',
  },
  {
    myProject: {
      title: 'Lasowiak Cranberry Liqueur',
      slug: 'lasowiak-cranberry-liqueur',
      desc: 'Reinterpreting regional folk heritage through strict pharmaceutical typography and tactile material craft: hand-folded linen cap wrap, apothecary cross grid, raw glass.',
      clientContext: 'Art of Packaging — Debiuty',
      type: 'Packaging & Label Design',
      year: '2026',
      img: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
      imgW: 1500,
      imgH: 1000,
    },
    theirProject: {
      title: 'Uniscent — Visual Identity & Packaging',
      type: 'Brand Identity & Tactile Packaging',
      img: '/media/lundgren-lindqvist/ll-uniscent-packaging.jpg',
      imgW: 1500,
      imgH: 1000,
    },
    matchTitle: 'Material honesty as design language.',
    matchDesc: 'Lundgren+Lindqvist\'s packaging practice begins with paper weight, surface texture, and production precision — never superficial mockup styling. Lasowiak applies the same logic: hand-folded linen cap wrap, cotton paper label with an apothecary-cross grid, and bottle geometry selected for archival mass. The material is the identity.',
  },
]

export function LundgrenLindqvistPitchPage() {
  return (
    <div data-ll-page className={styles.page}>
      <div className={styles.inner}>
        {/* ── Page Header (exact line from user sketch) ── */}
        <header className={styles.topHeader}>
          <h1 className={styles.matchEquation}>
            Lundgren + Lindqvist + Danylo Vasiur = Match
          </h1>
        </header>

        {/* ── 2x2 Matrix Case Modules ── */}
        {PAIRS.map((pair, idx) => (
          <article key={pair.myProject.slug} className={styles.caseModule}>
            <div className={styles.matrixGrid}>

              {/* ── Quadrant 1: Top-Left (My project text & metadata) ── */}
              <div className={styles.quadrantTopLeft}>
                <p className={styles.projectDesc}>{pair.myProject.desc}</p>

                <div className={styles.metaList}>
                  <div className={styles.metaItem}>
                    Client/context: {pair.myProject.clientContext}
                  </div>
                  <div className={styles.metaItem}>
                    Type: {pair.myProject.type}
                  </div>
                  <div className={styles.metaItem}>
                    Year: {pair.myProject.year}
                  </div>
                </div>

                <Link
                  href={`/${pair.myProject.slug}`}
                  className={styles.seeCaseLink}
                >
                  See full case
                </Link>
              </div>

              {/* ── Quadrant 2: Top-Right (My project image) ── */}
              <div className={styles.quadrantTopRight}>
                <Image
                  src={pair.myProject.img}
                  alt={pair.myProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.projectImage}
                  priority={idx === 0}
                />
              </div>

              {/* ── Center + (Intersection of diagonal image corners) ── */}
              <div className={styles.centerPlus} aria-hidden="true">
                +
              </div>

              {/* ── Quadrant 3: Bottom-Left (Their project image) ── */}
              <div className={styles.quadrantBottomLeft}>
                <Image
                  src={pair.theirProject.img}
                  alt={pair.theirProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.projectImage}
                />
              </div>

              {/* ── Quadrant 4: Bottom-Right (Match rationale) ── */}
              <div className={styles.quadrantBottomRight}>
                <h2 className={styles.matchTitle}>{pair.matchTitle}</h2>
                <p className={styles.matchDesc}>{pair.matchDesc}</p>
                <div className={styles.theirProjectBadge}>
                  Lundgren+Lindqvist &mdash; {pair.theirProject.title} ({pair.theirProject.type})
                </div>
              </div>

            </div>
          </article>
        ))}

        {/* ── Minimal Closing Footer ── */}
        <footer className={styles.pitchFooter}>
          <p className={styles.footerNote}>
            I am Danylo Vasiur, a graphic designer currently finishing my degree in Kraków,
            looking to bring this architectural discipline, editorial craft, and material rigor
            to Lundgren+Lindqvist in Göteborg.
          </p>
          <div className={styles.footerLinks}>
            <a href="mailto:vasurdana@gmail.com" className={styles.footerLink}>
              vasurdana@gmail.com
            </a>
            <span className={styles.footerSep}>/</span>
            <Link href="/" className={styles.footerLink}>
              danylovasiurportfolio.xyz
            </Link>
            <span className={styles.footerSep}>/</span>
            <a
              href="https://www.linkedin.com/in/danylo-vasiur-7a9604324/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
