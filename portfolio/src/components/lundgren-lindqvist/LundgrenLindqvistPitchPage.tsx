'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './LundgrenLindqvistPitchPage.module.css'

interface SlideItem {
  src: string
  alt: string
}

interface CaseComparison {
  category: string
  matchTheme: string
  myProject: {
    title: string
    slug: string
    desc: string
    img: string
    alt: string
    slides?: SlideItem[]
  }
  theirProject: {
    title: string
    img: string
    alt: string
    matchDesc: string
  }
}

const AKTA_SLIDES: SlideItem[] = [
  {
    src: '/media/aktan-wood-cover.jpg',
    alt: 'Bruno Jasieński — Akta № archival book photographed on raw wooden planks',
  },
  {
    src: '/media/tsAsaIZClXpfnvWg10zYXNlBUR4.jpg',
    alt: 'Printed publication Akta № open on studio worktable',
  },
  {
    src: '/media/NOavjdW8oiXLl4FIMb1Ne9xF0.png',
    alt: 'Original charcoal illustration spread — Siberian camp watchtower and crows',
  },
  {
    src: '/media/VocXQQCXA7epkcS8eluPo9Gt8.png',
    alt: 'Akta № graphic cover with typography',
  },
  {
    src: '/media/Q7ZqwQYoYCnGTKR9x3wu7GAtRPY.png',
    alt: 'Inverted archival spread confronting political censorship',
  },
  {
    src: '/media/JP5cZqOg6vS1gavC5q2QsMv4.png',
    alt: 'Futurist poetry typesetting layout',
  },
]

const COMPARISONS: CaseComparison[] = [
  {
    category: '01 — Editorial & Publication Design',
    matchTheme: 'The artist’s sketchbook: raw gesture preserved in physical binding.',
    myProject: {
      title: 'Bruno Jasieński — Akta №',
      slug: 'aktan',
      desc: 'Archival publication confronting historical erasure through raw charcoal illustrations, inverted typographic spreads, and tactile physical binding decisions.',
      img: '/media/aktan-wood-cover.jpg',
      alt: 'Bruno Jasieński — Akta № book photographed on raw wooden planks',
      slides: AKTA_SLIDES,
    },
    theirProject: {
      title: 'Ekta Sketchbooks I–III — Daniel Götesson',
      img: '/media/lundgren-lindqvist/ll-ekta-open-spread.jpg',
      alt: 'Ekta Sketchbooks I-III three-volume publication by Lundgren+Lindqvist showing open spreads of raw drawings and paint',
      matchDesc: 'Both publications treat the artist\'s sketchbook not as secondary prep-work, but as the core artifact. In Akta №, raw charcoal gestures stand in for a clandestine Siberian prison diary, bound into a tactile archival volume. In Ekta Sketchbooks I–III, Lundgren+Lindqvist preserve Daniel Götesson\'s raw studio drawings and collages through facsimile printing on Munken paper and custom bindings. In both works, the methodology is identical: preserving the raw, unpolished human hand through architectural editorial rigor.',
    },
  },
  {
    category: '02 — Visual Identity & Systems',
    matchTheme: 'Identity as architecture, not decoration.',
    myProject: {
      title: 'Warsaw Museum of Dance and Movement',
      slug: 'mtrw',
      desc: 'A structural visual identity built from a single geometric primitive: the circle as the universal spatial constraint of human movement across centuries.',
      img: '/media/s1aYIj6heOAw1Qof49OfrefvFAo.png',
      alt: 'Warsaw Museum of Dance and Movement logotype and geometric identity symbol',
    },
    theirProject: {
      title: 'Inflection — Visual Identity System',
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
      desc: 'Reinterpreting regional folk heritage through strict pharmaceutical typography and tactile material craft: hand-folded linen cap wrap, apothecary cross grid, raw glass.',
      img: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
      alt: 'Lasowiak cranberry liqueur bottle wrapped in folk textile',
    },
    theirProject: {
      title: 'Uniscent — Visual Identity & Packaging',
      img: '/media/lundgren-lindqvist/ll-uniscent-patchouli.jpg',
      alt: 'Uniscent visual identity and patchouli artwork with vector typography by Lundgren+Lindqvist',
      matchDesc: 'Lundgren+Lindqvist\'s packaging practice begins with paper weight, surface texture, and production method — never a Photoshop mockup. Lasowiak applies the same logic: hand-folded linen cap wrap, cotton paper label with a strict apothecary-cross grid, and bottle geometry chosen for archival weight. The material is the identity.',
    },
  },
]

function ProjectSlideshow({ slides }: { slides: SlideItem[] }) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance every 4.5s unless hovered
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, slides.length])

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const current = slides[index]

  return (
    <div
      className={styles.slideshowRoot}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.imageWrap}>
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 820px) 100vw, 50vw"
          className={styles.projectImage}
          priority
        />
        {/* Transparent tap zones */}
        <button
          type="button"
          aria-label="Previous slide"
          className={styles.tapZoneLeft}
          onClick={goPrev}
        />
        <button
          type="button"
          aria-label="Next slide"
          className={styles.tapZoneRight}
          onClick={goNext}
        />
      </div>

      {/* Minimal segmented progress track */}
      <div className={styles.track} role="tablist" aria-label="Slideshow progress">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.trackSegment} ${i === index ? styles.trackSegmentActive : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export function LundgrenLindqvistPitchPage() {
  return (
    <div data-ll-page className={styles.page}>
      <div className={styles.inner}>
        {/* ── Case Comparisons (2-Column Grid directly, no lines, edge-to-edge layout) ── */}
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
                {comp.myProject.slides ? (
                  <ProjectSlideshow slides={comp.myProject.slides} />
                ) : (
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
                )}

                <div className={styles.cardInfo}>
                  <h3 className={styles.projectTitle}>{comp.myProject.title}</h3>
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
                  <h3 className={styles.projectTitle}>{comp.theirProject.title}</h3>
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
