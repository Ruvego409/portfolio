'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

import { revealVariants, revealViewport } from '@/lib/motion'

type Props = {
  children: ReactNode
  /** Extra seconds before this element reveals, for staggering siblings. */
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'figure'
}

/**
 * Fades and lifts its children into view once, the first time they cross the
 * viewport. Respects prefers-reduced-motion by rendering the resting state.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: Props) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  return (
    <Component
      className={className}
      variants={revealVariants}
      initial={reduced ? 'static' : 'hidden'}
      whileInView={reduced ? 'static' : 'visible'}
      viewport={revealViewport}
      transition={{ delay }}
    >
      {children}
    </Component>
  )
}
