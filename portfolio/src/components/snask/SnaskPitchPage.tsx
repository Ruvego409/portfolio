'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { SnaskHeartIntro } from './SnaskHeartIntro'
import styles from './SnaskPitchPage.module.css'

const PAIRS = [
  {
    theme: 'Packaging & Craft Alcohol',
    headline: 'Tearing up the heritage beverage playbook',
    tag: 'Lasowiak × PangPang Beer',
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
    lead: 'Both projects reject safe, sterile minimalism in favor of visceral personality, real physical craft, and rock’n’roll attitude.',
    narrative: [
      'Snask turned PangPang craft beer into a cult icon with clash-color tiki palettes, bespoke typography, and irreverent drinking rituals that mock industry clichés. In Lasowiak, I took a traditional Polish folk liqueur out of dusty tourist gift shops and rebuilt it as an unapologetic, contemporary design piece.',
      'Neither of us believes packaging lives only on a flat computer mockup. Snask builds tactile experiences into every bottle; in Lasowiak, the identity lives in tangible materials: hand-folded fabric cap wraps, apothecary cross geometry, and region-authentic embroidery translated into a rigorous label grid. The project was recognized at Poland’s Art of Packaging national competition in the Debiuty student category.',
    ],
    takeaway: 'Match: Liquid culture torn out of the expected playbook — designed to dominate shelves and make enemies of boring packaging.',
  },
  {
    theme: 'Editorial Rebellion & Deconstructed Typography',
    headline: 'Typography as physical revolt',
    tag: 'Ubu Roi × Make Enemies',
    myProject: {
      title: 'Ubu Roi ou les Polonais',
      slug: 'ubu',
      video: '/media/pmrVVXBKjVwuqmxJx9S36N57A.mp4',
      role: 'Danylo Vasiur',
    },
    snaskProject: {
      title: 'Make Enemies & Gain Fans',
      img: '/media/snask/snask-book.webp',
      role: 'Snask',
    },
    lead: 'We don’t treat books as polite containers for text. We treat typography as an explosive narrative device that refuses to behave.',
    narrative: [
      'Snask’s cult manifesto "Make Enemies & Gain Fans" is legendary because it was written and designed like an act of defiance — holographic rainbow foil, confrontational typography, and layouts that laugh in the face of academic book design. In Ubu Roi, I applied that exact disrespect to Alfred Jarry’s 1896 absurdist play.',
      'Instead of setting polite academic type, I reworked the typeface by carving circular voids into each letterform. As the grotesque King Ubu collapses his kingdom through greed and incompetence, the typography across the spreads literally disintegrates in real time before the reader’s eyes. Turning a page is an action that triggers a collapse.',
    ],
    takeaway: 'Match: Disobeying the classical grid and turning editorial print into physical, immersive theater.',
  },
  {
    theme: 'High-Saturation Identity & Public Space',
    headline: 'Public space at maximum volume',
    tag: 'Re:Move × Malmöfestivalen',
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
    lead: 'Fearless, high-voltage palettes paired with kinetic rhythm that command public spaces and ignite community excitement.',
    narrative: [
      'Snask’s celebrated campaign for Malmöfestivalen owned the entire city by creating hyper-saturated, joyful typography and oversized installations that demand attention from 100 meters away. Re:Move operates on that exact same electric frequency.',
      'Instead of polite, static cultural posters, Re:Move captures the raw energy of human motion through intense clashing color (punchy red, electric yellow, cobalt blue) and hyper-bold typography engineered to cut through visual noise in urban outdoor settings. Built as a living identity that translates effortlessly from street billboards to oversized hoodies and motion graphics.',
    ],
    takeaway: 'Match: Fearless, high-saturation identities engineered to stop people in their tracks on the street.',
  },
]

export function SnaskPitchPage() {
  return (
    <main className={styles.page}>
      {/* ── 1. Interactive Heart Hero ── */}
      <SnaskHeartIntro />

      {/* ── 2. The Manifesto / Statement (Clean Typography, 2 Columns) ── */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <Reveal>
            <div className={styles.manifestoGrid}>
              <div className={styles.manifestoColLeft}>
                <h2 className={styles.headline}>
                  Most design agencies produce sterile beige templates. Snask makes noise, rock &amp; roll, and true culture.
                </h2>
              </div>
              <div className={styles.manifestoColRight}>
                <p className={styles.manifestoText}>
                  I’m Danylo Vasiur — a graphic designer based in Krakow, moving between editorial design, brand identity, and physical tactile typography. I don’t believe in safe, quiet design that hides behind minimalism.
                </p>
                <p className={styles.manifestoText}>
                  Your ethos of <em>&ldquo;Make enemies &amp; gain fans&rdquo;</em> is exactly how I approach every project: whether that means crafting a raw display typeface from the stone silhouettes of the Tatra mountains, tearing apart typography in an absurdist theater book, or wrapping a folk liqueur bottle in hand-folded embroidery. Here is how our creative DNA connects:
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. The 3 Matched Projects (Consistent 60px Edge Margin, 2 Columns) ── */}
      <section className={styles.pairsSection}>
        <div className={styles.sectionHeading}>
          <Reveal>
            <h3 className={styles.pairsTitle}>Three Projects, One Shared DNA</h3>
            <p className={styles.pairsSubtitle}>
              Tactile craft, unapologetic typography, and zero boring corporate compromise.
            </p>
          </Reveal>
        </div>

        <div className={styles.pairList}>
          {PAIRS.map((pair, idx) => (
            <Reveal key={pair.theme} delay={idx * 0.1}>
              <div className={styles.pairCard}>
                <div className={styles.pairHeader}>
                  <span className={styles.pairTheme}>{pair.theme}</span>
                  <span className={styles.pairTag}>{pair.tag}</span>
                </div>

                <div className={styles.pairVisuals}>
                  {/* Left: My Work */}
                  <div className={styles.visualCol}>
                    <span className={styles.visualRole}>Danylo Vasiur</span>
                    <div className={styles.visualImgWrapper}>
                      {pair.myProject.video ? (
                        <video
                          src={pair.myProject.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className={styles.visualMedia}
                        />
                      ) : (
                        <Image
                          src={pair.myProject.img!}
                          alt={pair.myProject.title}
                          width={700}
                          height={700}
                          className={styles.visualMedia}
                        />
                      )}
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
                        width={700}
                        height={700}
                        className={styles.visualMedia}
                      />
                    </div>
                    <h4 className={styles.visualTitle}>{pair.snaskProject.title}</h4>
                  </div>
                </div>

                {/* Snask signature pastel pink #fbd4dc block with structured 2-column text */}
                <div className={styles.pairDescription}>
                  <div className={styles.descInner}>
                    <div className={styles.descColLeft}>
                      <h4 className={styles.descHeadline}>{pair.headline}</h4>
                      <p className={styles.descLead}>{pair.lead}</p>
                      <div className={styles.descTakeaway}>
                        {pair.takeaway}
                      </div>
                    </div>
                    <div className={styles.descColRight}>
                      <div className={styles.descBody}>
                        {pair.narrative.map((paragraph, pIdx) => (
                          <p key={pIdx} className={styles.descParagraph}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.pairLinkWrapper}>
                  <Link href={`/${pair.myProject.slug}`} className={styles.pairLink}>
                    Explore Full Case Study →
                  </Link>
                </div>
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
              I would love to bring this energy, craft, and appetite for the unexpected to Stockholm and join Snask. Let’s grab a virtual coffee.
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
