/**
 * Optional media pass. The videos come straight out of Framer at the bitrate
 * they were uploaded at — several are 12–49 Mbit/s for clips two to four
 * seconds long, which is far more than the page ever displays. This re-encodes
 * them to H.264 at a quality-targeted CRF, caps the long edge at 1920, and
 * moves the MOOV atom to the front so playback starts before the file is fully
 * downloaded.
 *
 * It is NOT part of `npm run build`: re-encoding is lossy, so running it is a
 * deliberate choice. Originals are moved to public/media/_original first, so
 * the pass is reversible.
 *
 * Requires ffmpeg on PATH. Usage: npm run optimize:media
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, renameSync, statSync } from 'node:fs'
import { join } from 'node:path'

const MEDIA = join(process.cwd(), 'public', 'media')
const BACKUP = join(MEDIA, '_original')

const CRF = 24
const MAX_LONG_EDGE = 1920

function mb(bytes) {
  return (bytes / 1048576).toFixed(1)
}

if (!existsSync(MEDIA)) {
  console.error(`No media directory at ${MEDIA}`)
  process.exit(1)
}

mkdirSync(BACKUP, { recursive: true })

const videos = readdirSync(MEDIA).filter((name) => name.endsWith('.mp4'))
let before = 0
let after = 0

for (const name of videos) {
  const source = join(MEDIA, name)
  const original = join(BACKUP, name)

  if (existsSync(original)) {
    console.log(`skip  ${name} (already optimised)`)
    continue
  }

  const sizeBefore = statSync(source).size
  renameSync(source, original)

  execFileSync(
    'ffmpeg',
    [
      '-y',
      '-i', original,
      '-an',                                    // these are motion graphics, not audio
      '-c:v', 'libx264',
      '-preset', 'slow',
      '-crf', String(CRF),
      '-pix_fmt', 'yuv420p',
      '-profile:v', 'high',
      '-vf', `scale='min(${MAX_LONG_EDGE},iw)':-2:flags=lanczos`,
      '-movflags', '+faststart',
      source,
    ],
    { stdio: 'inherit' },
  )

  const sizeAfter = statSync(source).size
  before += sizeBefore
  after += sizeAfter
  console.log(`ok    ${name}  ${mb(sizeBefore)} MB -> ${mb(sizeAfter)} MB`)
}

console.log(`\nTotal ${mb(before)} MB -> ${mb(after)} MB`)
console.log(`Originals kept in ${BACKUP} — delete that folder once you are happy.`)
