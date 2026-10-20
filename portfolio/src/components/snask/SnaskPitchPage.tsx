'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { SnaskHeartIntro } from './SnaskHeartIntro'
import styles from './SnaskPitchPage.module.css'

const PAIRS = [
  {
    theme: 'Packaging & Craft Alcohol',
    myProject: {
      title: 'Lasowiak cranberry liqueur',
      slug: 'lasowiak-cranberry-liqueur',
      img: '/media/snask/my-lasowiak.webp',
      role: 'Danylo Vasiur',
    },
    snaskProject: {
      title: 'PangPang Brewery',
      img: '/media/snask/snask-pangpang.webp',
      role: 'Snask',
    },
    insight:
      "You turned craft beer into rock'n'roll with PangPang. In Lasowiak, I took traditional Polish folk culture out of dated regional cliches, fusing apothecary crosses with bold handmade fabric caps into contemporary packaging.",
  },
  {
    theme: 'Editorial Anarchy & Type Deconstruction',
    myProject: {
      title: 'Ubu Roi ou les Polonais',
      slug: 'ubu',
      img: '/media/snask/my-ubu.webp',
      role: 'Danylo Vasiur',
    },
    snaskProject: {
      title: 'Make Enemies & Gain Fans',
      img: '/media/snask/snask-book.webp',
      role: 'Snask',
    },
    insight:
      "Snask built a global movement around breaking corporate design rules. In Ubu Roi, I broke the typography itself — punching physical holes into glyphs and letting the layout collapse across pages to embody Alfred Jarry's absurd anarchy.",
  },
  {
    theme: 'Festival Energy & High-Saturation Key Visual',
    myProject: {
      title: 'Re:Move dance workshop',
      slug: 're-move',
      img: '/media/snask/my-remove.webp',
      role: 'Danylo Vasiur',
    },
    snaskProject: {
      title: 'Malmöfestivalen',
      img: '/media/snask/snask-malmo.webp',
      role: 'Snask',
    },
    insight:
      "Just like your explosive, tactile identities for Malmöfestivalen that own the city, Re:Move uses hyper-saturated overlapping motion and heavy poster aesthetics built to translate directly from billboards into apparel and physical merch.",
  },
]

export function SnaskPitchPage() {
  return (
    <main className={styles.page}>
      {/* ── 1. Interactive Heart Hero (The Sketch) ── */}
      <SnaskHeartIntro />

      {/* ── 2. The Manifesto / Statement ── */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <Reveal>
            <span className={styles.snaskTag}>✦ Why Snask?</span>
            <h2 className={styles.headline}>
              Most design agencies produce sterile beige templates.{' '}
              <span className={styles.highlight}>Snask makes noise, rock &amp; roll, and true culture.</span>
            </h2>
            <p className={styles.manifestoText}>
              I’m Danylo Vasiur — a graphic designer based in Krakow, moving between editorial design, brand identity, and physical tactile typography. I don’t believe in safe, quiet design that hides behind minimalism.
            </p>
            <p className={styles.manifestoText}>
              Your ethos of <em>&ldquo;Make enemies &amp; gain fans&rdquo;</em> is exactly how I approach every project: whether that means carving letterforms out of Tatra mountain stones, tearing apart typography in a theater book, or dressing a liqueur bottle in embroidered folk fabric. Here is how our creative DNA connects:
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3. The 3 Matched Projects ── */}
      <section className={styles.pairsSection}>
        <div className={styles.sectionHeading}>
          <Reveal>
            <h3 className={styles.pairsTitle}>Three Projects, One Shared DNA</h3>
            <p className={styles.pairsSubtitle}>
              Direct parallels between my work and Snask’s most iconic creative domains.
            </p>
          </Reveal>
        </div>

        <div className={styles.pairList}>
          {PAIRS.map((pair, idx) => (
            <Reveal key={pair.theme} delay={idx * 0.1}>
              <div className={styles.pairCard}>
                <div className={styles.pairHeader}>
                  <span className={styles.pairIndex}>Match 0{idx + 1}</span>
                  <span className={styles.pairTheme}>{pair.theme}</span>
                </div>

                <div className={styles.pairVisuals}>
                  {/* Left: My Work */}
                  <div className={styles.visualCol}>
                    <span className={styles.visualRole}>Danylo Vasiur</span>
                    <div className={styles.visualImgWrapper}>
                      <Image
                        src={pair.myProject.img}
                        alt={pair.myProject.title}
                        width={500}
                        height={500}
                        className={styles.visualImg}
                      />
                    </div>
                    <h4 className={styles.visualTitle}>{pair.myProject.title}</h4>
                  </div>

                  {/* VS Emblem */}
                  <div className={styles.pairVs}>✕</div>

                  {/* Right: Snask Work */}
                  <div className={styles.visualCol}>
                    <span className={styles.visualRole}>Snask</span>
                    <div className={styles.visualImgWrapper}>
                      <Image
                        src={pair.snaskProject.img}
                        alt={pair.snaskProject.title}
                        width={500}
                        height={500}
                        className={styles.visualImg}
                      />
                    </div>
                    <h4 className={styles.visualTitle}>{pair.snaskProject.title}</h4>
                  </div>
                </div>

                <p className={styles.pairDescription}>{pair.insight}</p>

                <Link href={`/${pair.myProject.slug}`} className={styles.pairLink}>
                  Explore Full Case Study →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── 4. Call to Action ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <Reveal>
            <h3 className={styles.ctaTitle}>
              Let&rsquo;s make some <span className={styles.ctaHighlight}>enemies &amp; gain fans</span> together.
            </h3>
            <p className={styles.ctaText}>
              I would love to bring this energy, craft, and appetite for the unexpected to Stockholm and join Snask. Let’s grab a virtual coffee or a cold beer.
            </p>

            <div className={styles.ctaActions}>
              <a href="mailto:vasurdana@gmail.com" className={styles.ctaBtnPrimary}>
                vasurdana@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/danylo-vasiur-7a9604324/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles.ctaBtnSecondary}
              >
                LinkedIn
              </a>
              <Link href="/" className={styles.ctaBtnSecondary}>
                Full Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
