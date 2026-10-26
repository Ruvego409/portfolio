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
    img?: string
    video?: string
    imgW: number
    imgH: number
  }
  theirProject: {
    title: string
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
      imgW: 900,
      imgH: 900,
    },
    theirProject: {
      title: 'Static Motion — LL\'Editions',
      img: '/media/NOavjdW8oiXLl4FIMb1Ne9xF0.png',
      imgW: 900,
      imgH: 900,
    },
    matchTitle: 'Editorial as physical object, not container.',
    matchDesc: 'Both approach the book as an architectural artifact with psychological mass. In Akta №, charcoal marks stand in for a clandestine Siberian diary — the editorial design does not illustrate, it implicates. In Static Motion, Lundgren+Lindqvist strip all conventional book apparatus and let the sequence do the work. The methodology is identical: material form as the argument.',
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
      imgW: 1200,
      imgH: 390,
    },
    theirProject: {
      title: 'Liljewall Arkitekter — L+L Identity',
      img: '/media/ldqNRSQyseJ8jNAfOnz2AuYW8U.png',
      imgW: 1200,
      imgH: 390,
    },
    matchTitle: 'Identity as architecture, not decoration.',
    matchDesc: "Lundgren+Lindqvist\u2019s institutional identities function like buildings: structural grids, repeating modular elements, and typographic hierarchies designed for permanence. The MTRW system follows the same discipline \u2014 one circle, one weight, one colour \u2014 scaled from sub-centimetre admission badges to multi-storey facade cuts in concrete.",
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
      imgW: 900,
      imgH: 600,
    },
    theirProject: {
      title: 'Tatra Display Typeface — Specimen',
      img: '/media/tatra/pres-5.webp',
      imgW: 1400,
      imgH: 1000,
    },
    matchTitle: 'Material honesty as design language.',
    matchDesc: "Lundgren+Lindqvist\u2019s packaging practice begins with paper weight, surface texture, and production method \u2014 never a Photoshop mockup. Lasowiak applies the same logic: linen cap wrap folded by hand, cotton paper label with a strict apothecary-cross border grid, and a bottle shape selected for its archival mass. The material is the identity.",
  },
]

export function LundgrenLindqvistPitchPage() {
  return (
    <main className={styles.page}>
      {/* ── Page header ── */}
      <header className={styles.pageHeader}>
        <p>Lundgren + Lindqvist + Danylo Vasiur = Match</p>
      </header>

      {/* ── Case pairs ── */}
      {PAIRS.map((pair) => (
        <article key={pair.myProject.slug} className={styles.caseBlock}>
          <div className={styles.caseLayout}>

            {/* LEFT: description + metadata + link */}
            <div className={styles.leftCol}>
              <p className={styles.projectDesc}>{pair.myProject.desc}</p>

              <div className={styles.metaBlock}>
                <span className={styles.metaLabel}>Client/context:</span>
                <span className={styles.metaRow}>{pair.myProject.clientContext}</span>
                <span className={styles.metaRow}>Type: {pair.myProject.type}</span>
                <span className={styles.metaRow}>Year: {pair.myProject.year}</span>
              </div>

              <Link href={`/${pair.myProject.slug}`} className={styles.caseLink}>
                See full case
              </Link>
            </div>

            {/* RIGHT: my image + plus + their image + match text */}
            <div className={styles.rightCol}>

              {/* My project image — top right */}
              <div className={styles.myProjectRow}>
                <div className={styles.myImgWrapper}>
                  {pair.myProject.video ? (
                    <video
                      src={pair.myProject.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.projectVideo}
                    />
                  ) : (
                    <Image
                      src={pair.myProject.img!}
                      alt={pair.myProject.title}
                      width={pair.myProject.imgW}
                      height={pair.myProject.imgH}
                      className={styles.projectImg}
                    />
                  )}
                </div>
              </div>

              {/* + sign + match text, side by side */}
              <div className={styles.middleRow}>
                <div className={styles.plusSign}>+</div>
                <div className={styles.matchTextBlock}>
                  <h3 className={styles.matchTitle}>{pair.matchTitle}</h3>
                  <p className={styles.matchDesc}>{pair.matchDesc}</p>
                </div>
              </div>

              {/* Their project image — bottom left (of right col) */}
              <div className={styles.theirProjectRow}>
                <div className={styles.theirImgWrapper}>
                  <Image
                    src={pair.theirProject.img}
                    alt={pair.theirProject.title}
                    width={pair.theirProject.imgW}
                    height={pair.theirProject.imgH}
                    className={styles.projectImg}
                  />
                </div>
              </div>

            </div>
          </div>
        </article>
      ))}

      {/* ── Closing contact block ── */}
      <div className={styles.caseBlock} style={{ borderBottom: 'none' }}>
        <p>
          I am Danylo Vasiur, a graphic designer currently finishing my degree in Kraków,
          looking to join Lundgren+Lindqvist in Göteborg.{' '}
          <a href="mailto:vasurdana@gmail.com" className={styles.caseLink}>
            vasurdana@gmail.com
          </a>
          {' / '}
          <Link href="/" className={styles.caseLink}>
            danylovasiurportfolio.xyz
          </Link>
        </p>
      </div>
    </main>
  )
}
