'use client'

import { useRef, useCallback } from 'react'
import styles from './TatraTester.module.css'

// Build the set of all allowed characters from the font
const ALLOWED_CHARS = new Set([
  // Basic ASCII printable (32-126 excluding Cyrillic)
  ...' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.split(''),
  // German
  'Ä', 'Ö', 'Ü', 'ä', 'ö', 'ü', 'ß', 'ẞ',
  // Polish
  'Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż', 'ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż',
  // Scandinavian
  'Å', 'Æ', 'Ø', 'å', 'æ', 'ø',
  // Spanish / French / Portuguese accents
  'À', 'Á', 'Â', 'Ã', 'Ç', 'È', 'É', 'Ê', 'Í', 'Î', 'Ï', 'Ñ', 'Ô', 'Ù', 'Û',
  'à', 'á', 'â', 'ã', 'ç', 'è', 'é', 'ê', 'í', 'î', 'ï', 'ñ', 'ô', 'ù', 'û',
  '¡', '¿',
  // Czech / Slovak / other Latin Extended
  'Č', 'Ď', 'Ě', 'Ň', 'Ř', 'Š', 'Ť', 'Ž', 'č', 'ď', 'ě', 'ň', 'ř', 'š', 'ť', 'ž',
  // Extra
  '×', '÷', '—', '¨',
  // Control keys passed through
  '\n', '\r',
])

const PRESETS = [
  { label: 'English', text: 'The quick brown fox jumps over the lazy dog.\nPACK MY BOX WITH FIVE DOZEN LIQUOR JUGS.' },
  { label: 'German', text: 'Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.\nÄpfel, Öl, Übermut & Straße.' },
  { label: 'Polish', text: 'Zażółć gęślą jaźń!\nPchnąć w tę łódź jeża lub ośm skrzyń fig.' },
  { label: 'Tatra', text: "TATRA'S ROCKS FONT\nANCIENT MOUNTAIN CARVINGS & RUNE STONES\n2026 — ROBUST DECORATIVE TYPOGRAPHY" },
]

export function TatraTester() {
  const editorRef = useRef<HTMLDivElement>(null)
  const activePreset = useRef<string | null>(null)

  const applyPreset = useCallback((text: string, label: string) => {
    if (!editorRef.current) return
    editorRef.current.innerText = text
    activePreset.current = label
    // Update active btn
    document.querySelectorAll('[data-preset]').forEach((el) => {
      el.setAttribute('data-active', el.getAttribute('data-preset') === label ? 'true' : 'false')
    })
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    // Allow control keys
    if (
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'Home' ||
      e.key === 'End' ||
      e.key === 'Tab' ||
      e.key === 'Enter' ||
      (e.ctrlKey || e.metaKey) // allow cut/copy/paste/undo
    ) return

    // Single character check
    if (e.key.length === 1 && !ALLOWED_CHARS.has(e.key)) {
      e.preventDefault()
    }
  }, [])

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    const filtered = text.split('').filter(ch => ALLOWED_CHARS.has(ch)).join('')
    document.execCommand('insertText', false, filtered)
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.presets}>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            data-preset={p.label}
            data-active="false"
            className={styles.presetBtn}
            onClick={() => applyPreset(p.text, p.label)}
          >
            {p.label}
          </button>
        ))}
        <button
          className={styles.presetBtn}
          onClick={() => {
            if (editorRef.current) editorRef.current.innerText = ''
            editorRef.current?.focus()
          }}
        >
          Clear
        </button>
      </div>

      <div
        ref={editorRef}
        className={styles.editor}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        data-placeholder="Type here… (only font glyphs allowed)"
      />

      <p className={styles.hint}>
        Only characters supported by the Tatra font are accepted.
        Cyrillic and other unsupported scripts are blocked.
      </p>
    </div>
  )
}
