'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './StockholmDesignLabPitchPage.module.css'

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

const SHEETSOLVED_SLIDES: SlideItem[] = [
  {
    src: '/media/ktl5UH5AFDMm4JWqXWHLbyPbvg.png',
    alt: 'SheetSolved responsive web interface and landing page design',
  },
  {
    src: '/media/SIrALj72Z8iMXMoIwOGxuV2Evbc.png',
    alt: 'Final SheetSolved brand mark and logotype',
  },
  {
    src: '/media/91zYcJUiXUHS2rjAY3PfKUU.png',
    alt: 'Geometric construction grid behind the SheetSolved mark',
  },
  {
    src: '/media/8uf2xSdhdT06cPocARGOx0MMEjc.png',
    alt: 'SheetSolved responsive system layouts and data components',
  },
]

const LASOWIAK_SLIDES: SlideItem[] = [
  {
    src: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
    alt: 'Lasowiak cranberry liqueur bottle photographed on raw folk textile',
  },
  {
    src: '/media/oydoUodnHgP6O23vOYSBKadtRw.jpg',
    alt: 'Lasowiak bottle label close-up showing pharmaceutical typography and apothecary cross grid',
  },
  {
    src: '/media/NCH4xGBKo0kzFSzSrEu1K2VFUr0.jpg',
    alt: 'Detail of tactile hand-folded linen cap wrap referencing traditional folk crafts',
  },
]

const UBU_SLIDES: SlideItem[] = [
  {
    src: '/media/BjsAOjLC5f3e9YKMBpst1WHBoI.png',
    alt: 'Open spread of Ubu Roi book with deconstructed typography and falling letterforms',
  },
  {
    src: '/media/GKnUirhcaQtzkSaxROH0FkhAhiw.png',
    alt: 'Ubu Roi ou les Polonais publication cover design',
  },
  {
    src: '/media/YR4es0CQo2MRPbh6QFIpfVnl4.png',
    alt: 'Collapsing typography layout spread mirroring the decay of Ubu’s kingdom',
  },
]

const COMPARISONS: CaseComparison[] = [
  {
    category: '01 / Digital Systems & Data Architecture',
    matchTheme: 'Turning complex data logic into an unapologetic, modular visual language.',
    myProject: {
      title: 'SheetSolved — Digital Identity & System',
      slug: 'sheetsolved',
      desc: 'Visual identity system and Framer-built web platform designed for an Excel data automation startup. Built from a 3-sheet coordinate grid, Saans grotesque typography, and functional digital components.',
      img: '/media/ktl5UH5AFDMm4JWqXWHLbyPbvg.png',
      alt: 'SheetSolved web interface and landing page',
      slides: SHEETSOLVED_SLIDES,
    },
    theirProject: {
      title: 'Viedoc — Clinical Data Software',
      img: '/media/sdl/sdl-viedoc-ui.png',
      alt: 'Viedoc clinical data platform visual identity system by Stockholm Design Lab',
      matchDesc: 'Both identities operate at the intersection of dense technical logic and clinical Scandinavian minimalism. In Viedoc, Stockholm Design Lab transformed clinical study software by elevating coordinate grids, modular data blocks, and bespoke functional typography into the primary brand language. In SheetSolved, the methodology is identical: rejecting generic SaaS vector decorations in favor of the structural matrix of spreadsheets — an abstract interlocking “S” derived from three cell sheets, framed by mathematical hierarchy.',
    },
  },
  {
    category: '02 / Packaging & Material Craft',
    matchTheme: 'Tactile material honesty: regional beverage culture stripped of folklore clichés.',
    myProject: {
      title: 'Lasowiak Cranberry Liqueur',
      slug: 'lasowiak-cranberry-liqueur',
      desc: 'Packaging concept for traditional cranberry liqueur from Poland’s Sandomierz Forest: reinterpreting regional folk culture through strict pharmaceutical typography and tactile material craft.',
      img: '/media/2LVl4gPAeX2Z4jsNezslguRIEg.jpg',
      alt: 'Lasowiak bottle on folk textile',
      slides: LASOWIAK_SLIDES,
    },
    theirProject: {
      title: 'Omaka — Irregular Elegance',
      img: '/media/sdl/sdl-omaka-cans.jpg',
      alt: 'Omaka craft brewery identity and packaging system by Stockholm Design Lab',
      matchDesc: 'Stockholm Design Lab’s work for Omaka is built on the philosophy of “irregular elegance” — a disciplined, repeatable grid of separated label fields that frames the craft of the liquid. Lasowiak applies that exact rigor to Eastern European heritage: stripping away decorative folk ornaments in favor of a clinical apothecary cross grid, contrasted with the raw physical honesty of a hand-folded linen textile wrap.',
    },
  },
  {
    category: '03 / Performing Arts & Typographic Deconstruction',
    matchTheme: 'The letterform as a physical actor: breaking the grid in theatrical space.',
    myProject: {
      title: 'Ubu Roi ou les Polonais',
      slug: 'ubu',
      desc: 'An editorial and typographic exploration of Alfred Jarry’s absurdist 1896 play: cutting holes into letterforms and collapsing layout structures across spreads to mirror the narrative dissolution of Ubu’s kingdom.',
      img: '/media/BjsAOjLC5f3e9YKMBpst1WHBoI.png',
      alt: 'Ubu Roi open book spread',
      slides: UBU_SLIDES,
    },
    theirProject: {
      title: 'Orionteatern — Performing Arts Identity',
      img: '/media/sdl/sdl-orionteatern-posters.jpg',
      alt: 'Orionteatern avant-garde theatre identity and typography by Stockholm Design Lab',
      matchDesc: 'Located in a former mechanical workshop, Orionteatern demanded an identity that matched its bold, unconventional stage experiments. SDL bypassed conventional theatre branding, utilizing industrial raw Futura, metal sign lettering, and a dynamic kinetic constellation that disrupts traditional layouts. In Ubu Roi, typographic anatomy undergoes that same theatrical trial: letterforms cease to be neutral carriers of text and become physical performers whose disintegration mirrors the narrative itself.',
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
          sizes="(max-width: 860px) 100vw, 50vw"
          className={styles.projectImage}
          style={{ objectFit: 'contain', objectPosition: 'top left' }}
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

      {/* Segmented progress track */}
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

export function StockholmDesignLabPitchPage() {
  return (
    <div data-sdl-page className={styles.page}>
      <div className={styles.inner}>
        {/* ── Studio Header Bar ── */}
        <header className={styles.studioHeader}>
          <h1 className={styles.studioTitle}>
            Danylo Vasiur &times; Stockholm Design Lab
          </h1>
          <span className={styles.studioMeta}>
            Selected Case Comparisons &middot; 2026
          </span>
        </header>

        {/* ── Case Comparisons (2-Column Grid) ── */}
        {COMPARISONS.map((comp, idx) => (
          <article key={comp.myProject.slug} className={styles.caseSection}>
            {/* Header bar */}
            <div className={styles.caseHeaderBar}>
              <span className={styles.caseCategory}>{comp.category}</span>
              <span className={styles.caseMatchTheme}>{comp.matchTheme}</span>
            </div>

            {/* 2-Column Comparison */}
            <div className={styles.twoColGrid}>
              {/* ── Left Column: Danylo Vasiur ── */}
              <div className={styles.colCard}>
                <span className={styles.columnAuthor}>Danylo Vasiur</span>
                {comp.myProject.slides ? (
                  <ProjectSlideshow slides={comp.myProject.slides} />
                ) : (
                  <div className={styles.imageWrap}>
                    <Image
                      src={comp.myProject.img}
                      alt={comp.myProject.alt}
                      fill
                      sizes="(max-width: 860px) 100vw, 50vw"
                      className={styles.projectImage}
                      style={{ objectFit: 'contain', objectPosition: 'top left' }}
                      priority={idx === 0}
                    />
                  </div>
                )}

                <div className={styles.cardInfo}>
                  <h2 className={styles.projectTitle}>{comp.myProject.title}</h2>
                  <p className={styles.projectDesc}>{comp.myProject.desc}</p>
                  <Link
                    href={`/${comp.myProject.slug}`}
                    className={styles.caseLink}
                  >
                    See full case &rarr;
                  </Link>
                </div>
              </div>

              {/* ── Right Column: Stockholm Design Lab ── */}
              <div className={styles.colCard}>
                <span className={styles.columnAuthor}>Stockholm Design Lab</span>
                <div className={styles.imageWrap}>
                  <Image
                    src={comp.theirProject.img}
                    alt={comp.theirProject.alt}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    className={styles.projectImage}
                    style={{ objectFit: 'contain', objectPosition: 'top left' }}
                    priority={idx === 0}
                  />
                </div>

                <div className={styles.cardInfo}>
                  <h2 className={styles.projectTitle}>{comp.theirProject.title}</h2>
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
        <footer className={styles.pitchClosing}>
          <p className={styles.closingText}>
            I am Danylo Vasiur, a graphic designer finishing my degree in Kraków. I am drawn to Stockholm Design Lab’s transformational rigor, systematic typography, and ability to turn complex constraints into iconic forms. I am seeking a Junior Designer role in Stockholm.
          </p>
        </footer>
      </div>
    </div>
  )
}
