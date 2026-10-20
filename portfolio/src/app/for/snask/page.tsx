import type { Metadata } from 'next'
import { SnaskPitchPage } from '@/components/snask/SnaskPitchPage'

export const metadata: Metadata = {
  title: 'Danylo Vasiur × Snask — A Creative Match',
  description:
    'A tailored showcase for Snask: connecting bold editorial design, packaging, and tactile typography.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SnaskPage() {
  return <SnaskPitchPage />
}
