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
      'Snask took craft beer and turned it into an icon with clash-color tiki palettes, bespoke typography, and a total disregard for category clichés. In Lasowiak, I took traditional Polish folk liqueur out of dusty tourist gift shops and rebuilt it as an unapologetic, contemporary design piece.',
      'Neither of us designs solely on a flat computer screen. Snask builds physical sets; in Lasowiak, the core visual language comes from hand-folded fabric cap wraps, apothecary cross geometry, and region-authentic embroidery translated into a rigorous label grid. The concept went on to be submitted to Poland’s Art of Packaging national competition in the Debiuty student category.',
    ],
    takeaway: 'Match: Heritage beverages torn out of the expected playbook — designed to dominate shelves and make enemies of boring packaging.',
  },
  {
    theme: 'Editorial Anarchy & Deconstructed Typography',
    headline: 'Typography as physical rebellion',
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
      'Snask’s bestselling manifesto "Make Enemies & Gain Fans" is legendary because it was designed like a physical act of revolt — rainbow foil, confrontational typography, and layouts that spit in the face of academic book design. In Ubu Roi, I applied that exact disrespect to Alfred Jarry’s 1896 absurdist play.',
      'Instead of setting polite academic type, I reworked the typeface by physically carving circular voids into each letterform. As the grotesque King Ubu collapses his kingdom through greed and incompetence, the typography across the pages literally falls apart in real time before the reader’s eyes. Turning a page is an action that triggers a collapse.',
    ],
    takeaway: 'Match: Disobeying the editorial grid and turning physical print into experiential theater.',
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
    lead: 'High-voltage, fearless color palettes paired with kinetic rhythm that dominate public spaces and ignite community excitement.',
    narrative: [
      'Snask’s world-famous campaign for Malmöfestivalen owned the entire city of Malmö by building gigantic physical type installations and turning them into hyper-saturated, joyful posters that demand attention from 100 meters away. Re:Move operates on the exact same electric frequency.',
      'Instead of cliché dance photography, Re:Move captures the essence of motion through overlapping, neon-contrast shapes (electric yellow, hot pink, cobalt blue) and hyper-bold typography engineered to withstand visual noise in urban outdoor settings. Designed from day one as a living system that translates naturally to street billboards, oversized printed hoodies, and digital motion graphics.',
    ],
    takeaway: 'Match: Fearless, high-saturation identities engineered to stop people in their tracks on the street.',
  },
]

export function SnaskPitchPage() {
  return (
    <main className={styles.page}>
      {/* ── 1. Interactive Heart Hero ── */}
      <SnaskHeartIntro />

      {/* ── 2. The Manifesto / Statement ── */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <Reveal>
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

      {/* ── 3. The 3 Matched Projects (Full-Bleed Stretch) ── */}
      <section className={styles.pairsSection}>
        <div className={styles.sectionHeading}>
          <Reveal>
            <h3 className={styles.pairsTitle}>Three Projects, One Shared DNA</h3>
            <p className={styles.pairsSubtitle}>
              Direct comparison showing our shared visual philosophy, physical craft, and design methodologies.
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

                {/* Snask signature pastel pink #fbd4dc full-bleed editorial block */}
                <div className={styles.pairDescription}>
                  <h4 className={styles.descHeadline}>{pair.headline}</h4>
                  <p className={styles.descLead}>{pair.lead}</p>
                  <div className={styles.descBody}>
                    {pair.narrative.map((paragraph, pIdx) => (
                      <p key={pIdx} className={styles.descParagraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className={styles.descTakeaway}>
                    {pair.takeaway}
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
