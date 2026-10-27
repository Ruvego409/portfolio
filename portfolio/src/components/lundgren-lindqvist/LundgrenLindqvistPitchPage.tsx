'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './LundgrenLindqvistPitchPage.module.css'

interface CaseComparison {
  category: string
  matchTheme: string
  myProject: {
    title: string
    slug: string
    meta: string
    desc: string
    img: string
    alt: string
  }
  theirProject: {
    title: string
    meta: string
    img: string
    alt: string
    matchDesc: string
  }
}

const COMPARISONS: CaseComparison[] = [
  {
    category: '01 — Editorial & Publication Design',
    matchTheme: 'Editorial as physical object, not container.',
    myProject: {
      title: 'Bruno Jasieński — Akta №',
      slug: 'aktan',
      meta: 'Editorial Design & Book · 2026 · University Project',
      desc: 'Archival publication confronting historical erasure through raw charcoal illustrations, inverted typographic spreads, and tactile physical binding decisions.',
      img: '/media/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg',
      alt: 'Printed Akta № book open on a table showing charcoal spreads and binding',
    },
    theirProject: {
      title: 'Static Motion — Carl Ander',
      meta: 'Publication Design · LL\'Editions, Gothenburg',
      img: '/media/lundgren-lindqvist/ll-static-motion.jpg',
      alt: 'Static Motion book by Carl Ander published by LL\'Editions',
      matchDesc: 'Both treat the book as an architectural artifact with psychological mass. In Akta №, raw charcoal gestures implicate the reader; in Static Motion, Lundgren+Lindqvist strip all conventional book apparatus and let the tactile sequence carry the work. The methodology is identical: material form as the argument.',
    },
  },
  {
    category: '02 — Visual Identity & Systems',
    matchTheme: 'Identity as architecture, not decoration.',
    myProject: {
      title: 'Warsaw Museum of Dance and Movement',
      slug: 'mtrw',
      meta: 'Visual Identity & Wayfinding · 2025 · Cultural Concept',
      desc: 'A structural visual identity built from a single geometric primitive: the circle as the universal spatial constraint of human movement across centuries.',
      img: '/media/s1aYIj6heOAw1Qof49OfrefvFAo.png',
      alt: 'Warsaw Museum of Dance and Movement logotype and geometric identity symbol',
    },
    theirProject: {
      title: 'Inflection — Visual Identity System',
      meta: 'Identity & Design System · Gothenburg',
      img: '/media/lundgren-lindqvist/ll-inflection-identity.jpg',
      alt: 'Inflection visual identity manual and geometric grid system by Lundgren+Lindqvist',
      matchDesc: 'Lundgren+Lindqvist\'s institutional identities function like architectural blueprints: strict geometric framing, modular hierarchies, and typographic discipline designed for permanence. The MTRW system follows the same rigor — one circle, one weight, one colour — scaled from sub-centimetre admission badges to multi-storey concrete facade signage.',
    },
  },
  {
    category: '03 — Packaging & Material Craft',
    matchTheme: 'Material honesty as design language.',
    myProject: {
      title: 'Lasowiak Cranberry Liqueur',
      slug: 'lasowiak-cranberry-liqueur',
      meta: 'Packaging & Label Design · 2026 · Art of Packaging (Debiuty)',
      desc: 'Reinterpreting regional folk heritage through strict pharmaceutical typography and tactile material craft: hand-folded linen cap wrap, apothecary cross grid, raw glass.',
      img: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
      alt: 'Lasowiak cranberry liqueur bottle wrapped in folk textile',
    },
    theirProject: {
      title: 'Uniscent — Visual Identity & Packaging',
      meta: 'Brand Identity & Packaging · Gothenburg',
      img: '/media/lundgren-lindqvist/ll-uniscent-patchouli.jpg',
      alt: 'Uniscent visual identity and patchouli artwork with vector typography by Lundgren+Lindqvist',
      matchDesc: 'Lundgren+Lindqvist\'s packaging practice begins with paper weight, surface texture, and production method — never a Photoshop mockup. Lasowiak applies the same logic: hand-folded linen cap wrap, cotton paper label with a strict apothecary-cross grid, and bottle geometry chosen for archival weight. The material is the identity.',
    },
  },
]

export function LundgrenLindqvistPitchPage() {
  return (
    <div data-ll-page className={styles.page}>
      <div className={styles.inner}>
        {/* ── Case Comparisons (2-Column Grid directly, no redundant proposal banner) ── */}
        {COMPARISONS.map((comp, idx) => (
          <article key={comp.myProject.slug} className={styles.caseSection}>
            {/* Category header & match thesis */}
            <div className={styles.caseHeaderBar}>
              <span className={styles.caseCategory}>
                {comp.category}
              </span>
              <span className={styles.caseMatchTheme}>
                {comp.matchTheme}
              </span>
            </div>

            {/* Side-by-Side 2-Column Comparison */}
            <div className={styles.twoColGrid}>

              {/* ── Left Column: Danylo Vasiur ── */}
              <div className={styles.colCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={comp.myProject.img}
                    alt={comp.myProject.alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    className={styles.projectImage}
                    priority={idx === 0}
                  />
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.cardHeaderRow}>
                    <span className={styles.authorLabel}>Danylo Vasiur</span>
                  </div>
                  <h3 className={styles.projectTitle}>{comp.myProject.title}</h3>
                  <div className={styles.projectMeta}>{comp.myProject.meta}</div>
                  <p className={styles.projectDesc}>{comp.myProject.desc}</p>
                  <Link
                    href={`/${comp.myProject.slug}`}
                    className={styles.caseLink}
                  >
                    See full case &rarr;
                  </Link>
                </div>
              </div>

              {/* ── Right Column: Lundgren+Lindqvist ── */}
              <div className={styles.colCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={comp.theirProject.img}
                    alt={comp.theirProject.alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    className={styles.projectImage}
                    priority={idx === 0}
                  />
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.cardHeaderRow}>
                    <span className={styles.authorLabel}>Lundgren+Lindqvist</span>
                  </div>
                  <h3 className={styles.projectTitle}>{comp.theirProject.title}</h3>
                  <div className={styles.projectMeta}>{comp.theirProject.meta}</div>

                  <div className={styles.matchCallout}>
                    <span className={styles.matchLabel}>The Match:</span>
                    <p className={styles.matchText}>{comp.theirProject.matchDesc}</p>
                  </div>
                </div>
              </div>

            </div>
          </article>
        ))}

        {/* ── Pitch Closing ── */}
        <div className={styles.pitchClosing}>
          <p className={styles.closingText}>
            I am Danylo Vasiur, a graphic designer currently completing my degree in Kraków, looking to bring this craft, architectural discipline, and dedication to physical form to Lundgren+Lindqvist in Gothenburg.
          </p>
        </div>
      </div>
    </div>
  )
}
