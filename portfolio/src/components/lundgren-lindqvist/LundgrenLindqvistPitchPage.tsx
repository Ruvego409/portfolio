'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import styles from './LundgrenLindqvistPitchPage.module.css'

interface ProjectCase {
  number: string
  title: string
  subtitle: string
  slug: string
  passport: {
    discipline: string
    year: string
    context: string
    typography: string
    materials: string
    format: string
  }
  narrative: {
    approachHeading: string
    approachText: string
    relevanceHeading: string
    relevanceText: string
  }
  plates: {
    src: string
    alt: string
    caption: string
    fullWidth?: boolean
    width: number
    height: number
  }[]
}

const CASES: ProjectCase[] = [
  {
    number: 'Index 01 / Publishing & Material Archive',
    title: 'Bruno Jasieński — Akta №',
    subtitle:
      'An archival editorial publication confronting historical erasure through raw charcoal marks, tactile binding, and inverted typographic spreads.',
    slug: 'aktan',
    passport: {
      discipline: 'Editorial Design & Archival Book',
      year: '2026',
      context: 'Self-initiated / University research',
      typography: 'Custom modified grotesque with archival serif',
      materials: 'Heavy uncoated paper, raw charcoal dust transfer, exposed thread',
      format: '140 × 200 mm, 84 pages',
    },
    narrative: {
      approachHeading: 'Editorial Hypothesis & Execution',
      approachText:
        'When the Soviet state executed Polish futurist poet Bruno Jasieński in 1938, it attempted to erase every trace of his existence. Rather than publishing a polite academic retrospective, this volume is framed as a clandestine artifact: raw charcoal sketches rendered as if smuggled from a Siberian transit camp, interspersed with inverted spreads where the editorial layout itself has been tampered with.',
      relevanceHeading: 'Alignment with LL’Editions',
      relevanceText:
        'Lundgren+Lindqvist’s independent imprint LL’Editions consistently proves that a book is not merely a container for content, but an architectural object with physical mass and psychological weight. This project explores that exact intersection: narrative typography, deliberate paper choices, and material storytelling.',
    },
    plates: [
      {
        src: '/media/VocXQQCXA7epkcS8eluPo9Gt8.png',
        alt: 'Bruno Jasienski Akta No. book cover',
        caption: '01. Cover typography with stark monochrome numbering and tactile grain',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg',
        alt: 'Printed book photographed flat on wooden table',
        caption: '02. Physical printed monograph specimen, natural diffuse lighting',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/NOavjdW8oiXLl4FIMb1Ne9xF0.png',
        alt: 'Charcoal illustration spread',
        caption: '03. Archival spread: charcoal figures confronting typographic grid',
        fullWidth: true,
        width: 1600,
        height: 900,
      },
      {
        src: '/media/Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png',
        alt: 'Inverted spread layout',
        caption: '04. Typographic inversion: negative space reflecting state erasure',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/JP5cZqOg6vS1gavC5q2QsMv4.png',
        alt: 'Poem typesetting detail',
        caption: '05. Disciplined poetic typesetting and margin proportions',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    number: 'Index 02 / Institutional Systems & Architecture',
    title: 'Warsaw Museum of Dance and Movement',
    subtitle:
      'A structural visual identity for a cultural institution built entirely upon the circle as the foundational primitive of human movement.',
    slug: 'mtrw',
    passport: {
      discipline: 'Visual Identity, Wayfinding & Architecture',
      year: '2025',
      context: 'Cultural Institution (Warsaw)',
      typography: 'Custom geometric logotype & Swiss Grotesk',
      materials: 'Anodized steel signage, silkscreen banners, architectural glass',
      format: 'Comprehensive institutional identity & wayfinding',
    },
    narrative: {
      approachHeading: 'System Architecture & Non-Literalism',
      approachText:
        'Dance identities routinely rely on literal cliches: dancers frozen mid-air, motion blur, or silhouetted figures. MTRW rejects all figurative tropes. Through historical research into choreography across centuries, the system distills movement down to its purest spatial constraint: the circle. The geometric mark scales seamlessly from sub-centimeter ticket passes to multi-story building facade signs.',
      relevanceHeading: 'Alignment with L+L Identity Practice',
      relevanceText:
        'Lundgren+Lindqvist’s identities for institutions like Kiang Malingue, Liljewall Arkitekter, and Bukowskis demonstrate how a strict, understated grid produces enduring cultural authority. MTRW follows this methodology: an identity driven by architectural permanence and spatial restraint.',
    },
    plates: [
      {
        src: '/media/cUvL4YuhIciQHNXKYHUySSau5k.png',
        alt: 'Warsaw Museum facade signage',
        caption: '01. Facade signage integration: circular mark cut into concrete architecture',
        fullWidth: true,
        width: 1600,
        height: 900,
      },
      {
        src: '/media/ldqNRSQyseJ8jNAfOnz2AuYW8U.png',
        alt: 'Museum wayfinding system',
        caption: '02. Wayfinding totems and directional typography hierarchy',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/Hx3UkmAr0EmvPLOHIHHiZGCIdA.png',
        alt: 'Museum poster series',
        caption: '03. Exhibition poster series based on circular grid coordinates',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/Jx9iqoQQHyCAxwRE6u2QjpSV0.png',
        alt: 'Identity applied to tickets and passes',
        caption: '04. Ephemera: visitor passes, blind stamps, and admission badges',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/ymqrXopgmBV7D4h6jiwhgXWC1Y.png',
        alt: 'Printed museum programme booklet',
        caption: '05. Printed seasonal programme: grid discipline and paper margins',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    number: 'Index 03 / Material Culture & Tactile Packaging',
    title: 'Lasowiak Cranberry Liqueur',
    subtitle:
      'Reinterpreting regional folk heritage through strict pharmaceutical typography and tactile material craft.',
    slug: 'lasowiak-cranberry-liqueur',
    passport: {
      discipline: 'Packaging Design & Material Culture',
      year: '2026',
      context: 'Art of Packaging Competition (Debiuty)',
      typography: 'Rigorous apothecary cross grid with serif accents',
      materials: 'Hand-folded regional linen, raw glass, cotton paper label',
      format: 'Bespoke bottle packaging with fabric cap closure',
    },
    narrative: {
      approachHeading: 'De-Kitsching Regional Tradition',
      approachText:
        'Regional drinks in Central and Eastern Europe are almost universally trapped in dated souvenir kitsch. Lasowiak strips away nostalgic sentimentality and reconstructs the cranberry liqueur of the Sandomierz Forest ethnic group as a refined contemporary product. The apothecary cross grid nods to the historical belief in the liqueur’s medicinal virtues, while the fabric wrap introduces authentic tactile texture.',
      relevanceHeading: 'Alignment with L+L Packaging Rigor',
      relevanceText:
        'Much like Lundgren+Lindqvist’s packaging for Uniscent and boutique Scandinavian spirits, this project proves that packaging design begins with material honesty and production detailing: the weight of the paper, the tactile fold of linen, and the strict hierarchy of legal label text.',
    },
    plates: [
      {
        src: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
        alt: 'Lasowiak bottle on folk textile',
        caption: '01. Bottle architecture photographed with hand-wrapped linen cap closure',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/oydoUodnHgP6O23vOYSBKadtRw.jpg',
        alt: 'Detail of bottle cap wrap',
        caption: '02. Material detail: traditional folding and tie mechanism',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/7jMMFO7GzMZIHiGaLslCBgT380A.png',
        alt: 'Full Lasowiak packaging system',
        caption: '03. Complete packaging system: primary label grid, back specification, and closure',
        fullWidth: true,
        width: 1600,
        height: 900,
      },
      {
        src: '/media/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg',
        alt: 'Front and back labels',
        caption: '04. Strict typographic hierarchy and cross-and-flower border geometry',
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    number: 'Index 04 / Typographic Research & Specimen',
    title: 'Tatra Display Typeface',
    subtitle:
      'A display typeface crafted from the raw stone textures and geological silhouettes of the Tatra mountain range.',
    slug: 'tatra',
    passport: {
      discipline: 'Typeface Design & Specimen',
      year: '2026',
      context: 'Independent Typographic Exploration',
      typography: 'Tatra Display (Regular)',
      materials: 'Vector glyph paths derived from high-resolution stone scans',
      format: 'Full Latin glyph set & editorial specimen book',
    },
    narrative: {
      approachHeading: 'Organic Constraints vs Modular Geometry',
      approachText:
        'Rather than constructing letterforms purely on digital bezier vectors, Tatra takes its proportions from physical granite stones gathered in the High Tatras. Each glyph balances brutalist weight with natural eroded curves, creating a typeface that operates like an architectural monolith on large-scale signage and book covers.',
      relevanceHeading: 'Alignment with L+L Experimental Type',
      relevanceText:
        'Lundgren+Lindqvist’s frequent design of custom typography for clients and monographs mirrors this philosophy: treating the letterform as a core structural component, not an off-the-shelf afterthought.',
    },
    plates: [
      {
        src: '/media/tatra/pres-2.webp',
        alt: 'Tatra stone elements spread',
        caption: '01. Stone texture studies and silhouette derivation',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/tatra/pres-3.webp',
        alt: 'Tatra full glyph map',
        caption: '02. Complete glyph map and architectural proportions',
        width: 1200,
        height: 900,
      },
      {
        src: '/media/tatra/pres-5.webp',
        alt: 'Elevation book mockup',
        caption: '03. Specimen publication: blind deboss cover and grid layout',
        fullWidth: true,
        width: 1600,
        height: 900,
      },
      {
        src: '/media/tatra/pres-8.webp',
        alt: 'Peak brutalist typography artwork',
        caption: '04. Large-scale monolithic application on architectural print',
        width: 1200,
        height: 900,
      },
    ],
  },
]

export function LundgrenLindqvistPitchPage() {
  return (
    <main className={styles.page}>
      {/* ── Top Colophon / Header Sub-bar ── */}
      <div className={styles.topColophon}>
        <div className={styles.colophonGroup}>
          <span className={styles.colophonDot} />
          <span className={styles.colophonHighlight}>Danylo Vasiur + Lundgren+Lindqvist</span>
        </div>
        <div className={styles.colophonGroup}>
          <span>Selected Works &amp; Portfolio Proposal</span>
        </div>
        <div className={styles.colophonGroup}>
          <span>Göteborg, Sweden / Kraków, Poland</span>
          <span>(2026)</span>
        </div>
      </div>

      {/* ── Intro Section / Editorial Brief ── */}
      <section className={styles.introSection}>
        <Reveal>
          <div className={styles.introGrid}>
            <div className={styles.introTitleWrapper}>
              <span className={styles.indexLabel}>Curated Presentation / 01–04</span>
              <h1 className={styles.introHeadline}>
                Design as <em>architectural logic</em>, material honesty, and typographic rigor.
              </h1>
            </div>

            <div className={styles.introBody}>
              <p>
                I am Danylo Vasiur, a graphic designer currently finishing my design education in
                Kraków. I work across editorial architecture, visual identity systems, and custom
                typography.
              </p>
              <p>
                I have long admired Lundgren+Lindqvist for your disciplined balance between physical
                print culture (through LL’Editions) and code-driven digital systems. Your work avoids
                superficial trends in favor of structural clarity, tactile paper stocks, and typographic
                precision.
              </p>
              <p>
                Below is a curated selection of four projects from my portfolio that share your
                methodological focus: from clandestine prison literature to institutional wayfinding and
                geological type design.
              </p>

              <div className={styles.introMetaList}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Candidate</span>
                  <span className={styles.metaValue}>Danylo Vasiur</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Discipline</span>
                  <span className={styles.metaValue}>Editorial, Type &amp; Systems</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Intended Office</span>
                  <span className={styles.metaValue}>Göteborg, Sweden</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Focus Area</span>
                  <span className={styles.metaValue}>Print, Books, Identity</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Project Catalog Index Bar ── */}
      <div className={styles.sectionBar}>
        <h2 className={styles.sectionBarTitle}>Selected Project Index (01–04)</h2>
        <span className={styles.sectionBarSub}>Structured Technical Documentation</span>
      </div>

      {/* ── Four Curated Projects ── */}
      {CASES.map((item) => (
        <section key={item.slug} className={styles.caseItem}>
          <div className={styles.caseHeader}>
            <Reveal delay={0.05}>
              <div className={styles.caseTitleGroup}>
                <span className={styles.caseNumber}>{item.number}</span>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                <p className={styles.caseSubtitle}>{item.subtitle}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={styles.casePassport}>
                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Discipline</span>
                  <span className={styles.passportVal}>{item.passport.discipline}</span>
                </div>
                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Year &amp; Context</span>
                  <span className={styles.passportVal}>
                    {item.passport.year} / {item.passport.context}
                  </span>
                </div>
                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Typography</span>
                  <span className={styles.passportVal}>{item.passport.typography}</span>
                </div>
                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Materials &amp; Production</span>
                  <span className={styles.passportVal}>{item.passport.materials}</span>
                </div>
                <div className={styles.passportRow}>
                  <span className={styles.passportKey}>Specifications</span>
                  <span className={styles.passportVal}>{item.passport.format}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Plates Grid */}
          <div className={styles.caseGallery}>
            <div className={styles.galleryGrid}>
              {item.plates.map((plate, pIdx) => (
                <div
                  key={plate.src}
                  className={`${styles.galleryPlate} ${plate.fullWidth ? styles.galleryPlateFull : ''}`}
                >
                  <Reveal delay={pIdx * 0.05}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={plate.src}
                        alt={plate.alt}
                        width={plate.width}
                        height={plate.height}
                        sizes={plate.fullWidth ? '100vw' : '(max-width: 860px) 100vw, 50vw'}
                        className={styles.plateMedia}
                      />
                    </div>
                    <span className={styles.plateCaption}>{plate.caption}</span>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Analysis */}
          <div className={styles.caseNarrative}>
            <Reveal>
              <div className={styles.narrativeCol}>
                <h4 className={styles.narrativeHeading}>{item.narrative.approachHeading}</h4>
                <p className={styles.narrativeText}>{item.narrative.approachText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className={styles.narrativeCol}>
                <h4 className={styles.narrativeHeading}>{item.narrative.relevanceHeading}</h4>
                <p className={styles.narrativeText}>{item.narrative.relevanceText}</p>
              </div>
            </Reveal>
          </div>

          {/* Link to full case study */}
          <div className={styles.caseActionRow}>
            <Link href={`/${item.slug}`} className={styles.caseActionLink}>
              View Complete Case Study [{item.slug}] &rarr;
            </Link>
          </div>
        </section>
      ))}

      {/* ── Closing Colophon & Contact ── */}
      <footer className={styles.colophonSection}>
        <Reveal>
          <div className={styles.colophonGrid}>
            <div className={styles.colophonLeft}>
              <span className={styles.indexLabel}>Colophon &amp; Contact</span>
              <h3 className={styles.colophonTitle}>
                Prepared for Andreas Friberg Lundgren &amp; Carl-Johan Lindqvist.
              </h3>
              <p className={styles.colophonText}>
                I am looking for an opportunity to join Lundgren+Lindqvist in Göteborg, contributing to
                LL’Editions publications, institutional brand architectures, and tactile packaging
                systems.
              </p>
              <p className={styles.colophonText}>
                Available for an introductory call or portfolio review at your convenience.
              </p>
            </div>

            <div className={styles.colophonRight}>
              <div className={styles.contactPassport}>
                <div className={styles.contactPassportRow}>
                  <span className={styles.contactLabel}>Direct Email</span>
                  <a href="mailto:vasurdana@gmail.com" className={styles.contactLink}>
                    vasurdana@gmail.com
                  </a>
                </div>
                <div className={styles.contactPassportRow}>
                  <span className={styles.contactLabel}>Primary Portfolio</span>
                  <Link href="/" className={styles.contactLink}>
                    danylovasiurportfolio.xyz
                  </Link>
                </div>
                <div className={styles.contactPassportRow}>
                  <span className={styles.contactLabel}>Network Profile</span>
                  <a
                    href="https://www.linkedin.com/in/danylo-vasiur-7a9604324/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles.contactLink}
                  >
                    LinkedIn Profile &rarr;
                  </a>
                </div>
                <div className={styles.contactPassportRow}>
                  <span className={styles.contactLabel}>Location &amp; Availability</span>
                  <span className={styles.contactTextVal}>
                    Currently Kraków, Poland / Relocating to Göteborg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  )
}
