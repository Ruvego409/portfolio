import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { LundgrenLindqvistPitchPage } from '@/components/lundgren-lindqvist/LundgrenLindqvistPitchPage'

const pxGrotesk = localFont({
  src: '../../../fonts/Px-Grotesk-Regular.woff2',
  display: 'block',
  variable: '--font-px-grotesk',
})

export const metadata: Metadata = {
  title: 'Danylo Vasiur + Lundgren+Lindqvist — Selected Works & Proposal',
  description:
    'A curated portfolio presentation for Lundgren+Lindqvist: editorial architecture, typographic research, and tactile material systems.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LundgrenLindqvistPage() {
  return (
    <div
      className={pxGrotesk.className}
      style={{
        fontFamily: 'var(--font-px-grotesk), "PxGrotesk", "Px Grotesk", sans-serif',
      }}
    >
      <LundgrenLindqvistPitchPage />
    </div>
  )
}
