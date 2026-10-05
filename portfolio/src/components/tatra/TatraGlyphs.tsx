'use client'

import styles from './TatraGlyphs.module.css'

// All glyphs supported by the Tatra font
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'.split('')
const DIGITS = '0123456789'.split('')
const SYMBOLS = [
  '!', '"', '#', '$', '%', "'", '(', ')', '*', '+', ',', '-', '.', '/',
  ':', ';', '<', '=', '>', '?', '[', '\\', ']', '_', '|', '×', '÷', '—', '¨',
]
const GERMAN = ['Ä', 'Ö', 'Ü', 'ä', 'ö', 'ü', 'ß', 'ẞ']
const POLISH = ['Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż', 'ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż']
const SCANDINAVIAN = ['Å', 'Æ', 'Ø', 'å', 'æ', 'ø']
const SPANISH_FRENCH = ['À', 'Á', 'Â', 'Ã', 'Ç', 'È', 'É', 'Ê', 'Í', 'Î', 'Ï', 'Ñ', 'Ô', 'Ù', 'Û', 'à', 'á', 'â', 'ã', 'ç', 'è', 'é', 'ê', 'í', 'î', 'ï', 'ñ', 'ô', 'ù', 'û', '¡', '¿']

const GROUPS = [
  { label: 'Uppercase', chars: UPPERCASE },
  { label: 'Lowercase', chars: LOWERCASE },
  { label: 'Digits', chars: DIGITS },
  { label: 'Symbols', chars: SYMBOLS },
  { label: 'German', chars: GERMAN },
  { label: 'Polish', chars: POLISH },
  { label: 'Scandinavian', chars: SCANDINAVIAN },
  { label: 'Spanish & French', chars: SPANISH_FRENCH },
]

function GlyphCard({ char }: { char: string }) {
  return (
    <div className={styles.card} title={char}>
      <span className={styles.glyph}>{char}</span>
    </div>
  )
}

export function TatraGlyphs() {
  return (
    <div className={styles.root}>
      {GROUPS.map((group) => (
        <div key={group.label} className={styles.group}>
          <p className={`label ${styles.groupLabel}`}>{group.label}</p>
          <div className={styles.grid}>
            {group.chars.map((ch) => (
              <GlyphCard key={ch} char={ch} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
