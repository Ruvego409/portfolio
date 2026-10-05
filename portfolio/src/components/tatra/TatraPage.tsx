'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { TatraGlyphs } from './TatraGlyphs'
import { TatraTester } from './TatraTester'
import styles from './TatraPage.module.css'

const galleryImages = [
  { src: '/media/tatra/pres-1.png', ratio: 1.778 },  // Cover — Tatra wordmark orange
  { src: '/media/tatra/pres-2.png', ratio: 1.778 },  // Elements spread (stone cutouts)
  { src: '/media/tatra/pres-3.png', ratio: 1.056 },  // Full glyph map (portrait)
  { src: '/media/tatra/pres-4.png', ratio: 1.778 },  // ALTITUDE STONE poster
  { src: '/media/tatra/pres-5.png', ratio: 1.408 },  // Elevation book mockup
  { src: '/media/tatra/pres-6.png', ratio: 1.778 },  // Streetwear / product mockups
  { src: '/media/tatra/pres-7.png', ratio: 1.778 },  // Beanie & apparel mockup
]

const relatedProjects = [
  {
    slug: 'aktan',
    title: 'Bruno Jasieński Akta №',
    discipline: 'Editorial Design',
    img: '/media/aktan-hover-preview.png',
    isVideo: false,
  },
  {
    slug: 'sheetsolved',
    title: 'SheetSolved branding + UI/UX',
    discipline: 'Brand Identity',
    img: '/media/X7mVWw48oBMDDHbcxH3RhVommQ.mp4',
    isVideo: true,
  },
  {
    slug: 'ubu',
    title: 'Ubu Roi ou les Polonais',
    discipline: 'Editorial Design',
    img: '/media/SpAQypmAKcjojk1r7A0F5hcye7M.mp4',
    isVideo: true,
  },
]

export function TatraPage() {
  return (
    <article>
      {/* ── Hero band ─────────────────────────────────── */}
      <div className={styles.band}>
        <h1 className={styles.bandTitle}>Tatra*</h1>
      </div>

      {/* ── Hero video/image ──────────────────────────── */}
      <div className={styles.heroMedia}>
        <video
          src="/media/tatra/gallery-8.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
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
        {/* Left: gallery images */}
        <div className={styles.gallery}>
          {galleryImages.map((img, i) => (
            <Reveal as="figure" key={img.src} delay={i * 0.04} className={styles.figure}>
              <Image
                src={img.src}
                alt={`Tatra font showcase ${i + 1}`}
                width={1600}
                height={Math.round(1600 / img.ratio)}
                sizes="(max-width: 900px) 100vw, 72vw"
                className={styles.galleryImg}
              />
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
      <section className={`container ${styles.related}`} aria-label="More projects">
        <ul className={styles.relatedGrid}>
          {relatedProjects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.06}>
              <Link href={`/${p.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedMedia}>
                  {p.isVideo ? (
                    <video
                      src={p.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.relatedImg}
                    />
                  ) : (
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={640}
                      height={480}
                      sizes="(max-width: 760px) 100vw, 32vw"
                      className={styles.relatedImg}
                    />
                  )}
                </div>
                <h3 className={styles.relatedTitle}>{p.title}</h3>
                <p className={styles.relatedDiscipline}>{p.discipline}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </article>
  )
}
