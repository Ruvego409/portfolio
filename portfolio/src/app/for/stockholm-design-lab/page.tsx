import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { StockholmDesignLabPitchPage } from '@/components/stockholm-design-lab/StockholmDesignLabPitchPage'

const labGrotesque = localFont({
  src: '../../../fonts/LabGrotesqueWeb-Regular.woff2',
  display: 'block',
  variable: '--font-lab-grotesque',
})

export const metadata: Metadata = {
  title: 'Danylo Vasiur × Stockholm Design Lab — Selected Works & Proposal',
  description:
    'A curated portfolio presentation for Stockholm Design Lab: digital data architecture, tactile material craft, and typographic deconstruction.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function StockholmDesignLabPage() {
  return (
    <div
      className={labGrotesque.className}
      style={{
        fontFamily: 'var(--font-lab-grotesque), "LabGrotesque", "Lab Grotesque", sans-serif',
      }}
    >
      <StockholmDesignLabPitchPage />
    </div>
  )
}
