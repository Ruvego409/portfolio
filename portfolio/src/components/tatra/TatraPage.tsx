'use client'

import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { RelatedProjects } from '@/components/project/RelatedProjects'
import { getProject } from '@/data/projects'
import type { Project } from '@/data/types'
import { TatraGlyphs } from './TatraGlyphs'
import { TatraTester } from './TatraTester'
import styles from './TatraPage.module.css'

type GalleryItem =
  | { kind: 'image'; src: string; ratio: number; alt: string }
  | { kind: 'vimeo'; vimeoId: string; ratio: number; title: string }

const galleryItems: GalleryItem[] = [
  { kind: 'image', src: '/media/tatra/pres-2.webp', ratio: 1.4,   alt: 'Tatra stone elements spread' },
  { kind: 'image', src: '/media/tatra/pres-3.webp', ratio: 0.872, alt: 'Tatra full glyph map' },
  { kind: 'vimeo', vimeoId: '1233050325',           ratio: 1.778, title: 'Tatra font animation' },
  { kind: 'image', src: '/media/tatra/pres-4.webp', ratio: 1.4,   alt: 'ALTITUDE STONE poster' },
  { kind: 'image', src: '/media/tatra/pres-5.webp', ratio: 1.4,   alt: 'Elevation book mockup' },
  { kind: 'image', src: '/media/tatra/pres-6.webp', ratio: 1.4,   alt: 'Streetwear and packaging design' },
  { kind: 'image', src: '/media/tatra/pres-7.webp', ratio: 1.501, alt: 'Peak beanie apparel mockup' },
  { kind: 'image', src: '/media/tatra/pres-8.webp', ratio: 1.432, alt: 'Peak brutalist typography artwork' },
]

export function TatraPage() {
  const related = [getProject('aktan'), getProject('sheetsolved'), getProject('ubu')].filter(
    (p): p is Project => Boolean(p),
  )

  return (
    <article>
      {/* ── Hero band ─────────────────────────────────── */}
      <div className={styles.band}>
        <h1 className={styles.bandTitle}>Tatra</h1>
      </div>

      {/* ── Hero cover image (optimized WebP) ─────────── */}
      <div className={styles.heroMedia}>
        <Image
          src="/media/tatra/pres-1.webp"
          alt="Tatra display font cover"
          width={1400}
          height={1000}
          priority
          sizes="100vw"
          className={styles.heroImg}
        />
      </div>

      {/* ── Overview ─────────────────────────────────── */}
      <div className={`container ${styles.overview}`}>
        <Reveal>
          <p className={`label ${styles.overviewLabel}`}>Project overview:</p>
          <p className={`lead ${styles.overviewText}`}>
            Tatra is a bold, organic display typeface crafted directly from
            real stone textures found in the Tatra Mountains. Designed for
            heavy impact and brutalist aesthetics, each character carries the
            tactile weight, rough edges, and natural erosion of mountain rock.
            It blends raw nature with modern design.
          </p>
        </Reveal>
      </div>

      {/* ── Glyphs section ───────────────────────────── */}
      <div className={`container ${styles.glyphsSection}`}>
        <Reveal>
          <p className={`label ${styles.sectionLabel}`}>All glyphs</p>
        </Reveal>
        <TatraGlyphs />
      </div>

      {/* ── Type tester ──────────────────────────────── */}
      <div className={`container ${styles.testerSection}`}>
        <Reveal>
          <p className={`label ${styles.sectionLabel}`}>Try the font</p>
        </Reveal>
        <TatraTester />
      </div>

      {/* ── Gallery + Specs (split layout like project pages) ── */}
      <div className={`container split ${styles.body}`}>
        {/* Left: gallery images & Vimeo video */}
        <div className={styles.gallery}>
          {galleryItems.map((item, i) => (
            <Reveal as="figure" key={item.kind === 'image' ? item.src : item.vimeoId} delay={i * 0.04} className={styles.figure}>
              {item.kind === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1400}
                  height={Math.round(1400 / item.ratio)}
                  sizes="(max-width: 900px) 100vw, 72vw"
                  className={styles.galleryImg}
                  loading="lazy"
                />
              ) : (
                <div className={styles.vimeoFrame} style={{ aspectRatio: item.ratio }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&loop=1&muted=1&autopause=0&background=1&title=0&byline=0&portrait=0&badge=0`}
                    className={styles.vimeoIframe}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={item.title}
                    loading="lazy"
                  />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Right: specs rail */}
        <aside className={styles.rail}>
          <div className={styles.railInner}>
            <Reveal className={styles.outcome}>
              <p className="label">Font Details &amp; Specs:</p>
              <div className={styles.outcomeBody}>
                <p><strong>Formats:</strong> OTF, TTF, WOFF, WOFF2</p>
                <p><strong>Licensing:</strong> Commercial &amp; Personal Use Included</p>
                <p>
                  <strong>Extended Multi-Language Support:</strong> Scandinavian,
                  German, Polish, Czech, Slovak, Spanish, French &amp; Portuguese accents
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06} className={styles.outcome}>
              <p className="label">Best Used For:</p>
              <div className={styles.outcomeBody}>
                <p>Streetwear &amp; Apparel Design</p>
                <p>Brutalist &amp; Modern Poster Art</p>
                <p>Outdoors &amp; Action Sports Branding</p>
                <p>Music Album Covers &amp; Event Flyers</p>
                <p>Package Design</p>
                <p>Editorial Headlines &amp; Large Display Signage</p>
              </div>
            </Reveal>

            <Reveal delay={0.12} className={styles.ctaGroup}>
              <a
                href="/fonts/tatra-rocks-trial.ttf"
                download="Tatra-Trial.ttf"
                className={styles.ctaBtn}
              >
                Download Trial
              </a>
              <a
                href="https://danylovasiur.gumroad.com/l/gouip"
                target="_blank"
                rel="noreferrer noopener"
                className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}
              >
                Buy full font
              </a>
            </Reveal>
          </div>
        </aside>
      </div>

      {/* ── Related projects ─────────────────────────── */}
      <RelatedProjects projects={related} />
    </article>
  )
}
