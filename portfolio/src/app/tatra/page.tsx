import type { Metadata } from 'next'
import { TatraPage } from '@/components/tatra/TatraPage'

export const metadata: Metadata = {
  title: 'Tatra display font',
  description:
    'Tatra is a bold, organic display typeface crafted directly from real stone textures found in the Tatra Mountains.',
}

export default function Tatra() {
  return <TatraPage />
}
