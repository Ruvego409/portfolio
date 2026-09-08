import type { Metadata } from 'next'

import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'

import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About me',
  description:
    'Danylo Vasiur is a graphic designer working in branding and editorial design, based in Kraków.',
}

const portrait = {
  kind: 'image',
  src: '/media/Rj1qeQOeefFaAhfVvneggTY.jpg',
  ratio: 0.817,
  alt: 'Danylo Vasiur photographed outdoors in winter',
} as const

const notes = [
  {
    label: 'Where I am:',
    body: 'Currently finishing my design education in Kraków, looking for job opportunities in branding and editorial design.',
  },
  {
    label: 'What I like:',
    body: 'I’m drawn to projects where typography and system-thinking meet — whether that’s a book design or a logo built from a strict grid.',
  },
  {
    label: 'How I work:',
    body: 'I like starting from constraints — a grid, a rule, a material limitation and seeing how far a concept can be pushed within them.',
  },
]

const disciplines = ['Visual identities', 'Web design', 'Editorial', 'Packaging']

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <Reveal>
        <h1 className={`sectionTitle ${styles.title}`}>About me</h1>
        <p className={`lead ${styles.intro}`}>
          Typography is where I start. Not as decoration, but as the actual engine of a project — it&rsquo;s
          a grid that dictates every shape, a single letterform that becomes a whole identity. I&rsquo;d
          rather spend three weeks perfecting a system than one week making something that merely looks
          finished. That&rsquo;s the kind of designer I am: less interested in trends, more interested in
          whether the logic holds up when you look closely.
        </p>
      </Reveal>

      <div className={styles.detail}>
        <Reveal className={styles.portrait}>
          <Media item={portrait} sizes="(max-width: 900px) 60vw, 20vw" />
        </Reveal>

        <Reveal className={styles.notes} delay={0.06}>
          {notes.map((note) => (
            <div key={note.label} className={styles.note}>
              <p className="label">{note.label}</p>
              <p className={styles.noteBody}>{note.body}</p>
            </div>
          ))}

          <div className={styles.note}>
            <p className="label">I am working with:</p>
            <ul className={styles.disciplines}>
              {disciplines.map((discipline) => (
                <li key={discipline}>{discipline}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
