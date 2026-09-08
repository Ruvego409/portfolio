/* eslint-disable @next/next/no-img-element -- fixed-size asset already in
   /public; next/image would add a serverless hop for no gain. */
import type { Metadata } from 'next'

import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/data/site'

import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contacts',
  description: `Get in touch with Danylo Vasiur — ${site.email}, based in ${site.location}.`,
}

/**
 * One screen: two oversized words with a small photograph wedged between them.
 * Each word is drawn as SVG text stretched to its box, which keeps the pair
 * optically identical in width at any viewport — a font-size calculation
 * cannot, because the two words have different letter counts.
 */
export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className="visuallyHidden">Contacts</h1>

      <Reveal className={styles.row}>
        <BigWord>Let&rsquo;s</BigWord>

        <a className={styles.plate} href={`mailto:${site.email}`}>
          <img
            src="/media/JFk9nttuiRdus7addf7KWrhZFY.png"
            alt={`Email ${site.email}`}
            width={224}
            height={117}
            fetchPriority="high"
          />
        </a>

        <BigWord>talk.</BigWord>
      </Reveal>

      <p className={styles.email}>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </div>
  )
}

function BigWord({ children }: { children: React.ReactNode }) {
  return (
    <svg className={styles.word} viewBox="0 0 548 320" role="presentation">
      <text x="0" y="246" textLength="548" lengthAdjust="spacingAndGlyphs">
        {children}
      </text>
    </svg>
  )
}
