import type { Metadata } from 'next'
import { LundgrenLindqvistPitchPage } from '@/components/lundgren-lindqvist/LundgrenLindqvistPitchPage'

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
  return <LundgrenLindqvistPitchPage />
}
