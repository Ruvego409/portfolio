import type { Transition, Variants } from 'framer-motion'

/* ============================================================================
   Shared motion vocabulary.
   ----------------------------------------------------------------------------
   Every animation on the site is defined here so timing stays consistent and
   components stay declarative. Nothing in this file touches the DOM.
   ========================================================================= */

/** Matches --ease-out-expo in tokens.css. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

/** Matches --ease-out-quart in tokens.css. */
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const

/**
 * Acceleration curve for the fall itself: slow release at the top, fast at the
 * bottom — the opposite shape from a normal UI ease, which is what makes it
 * read as gravity rather than as a slide.
 */
export const EASE_GRAVITY = [0.45, 0, 0.9, 0.42] as const

/* -------------------------------------------------------------------------- */
/* Bookshelf: the staggered "book fall" intro                                  */
/* -------------------------------------------------------------------------- */

/** Seconds between one book landing and the next being released. */
export const BOOK_STAGGER = 0.085

/** Delay before the first book is released, so the header settles first. */
export const BOOK_LEAD_IN = 0.18

/**
 * Books further down the stack start higher and therefore fall further, which
 * keeps the whole sequence reading as one object dropping rather than seven
 * independent ones.
 */
const dropDistance = (index: number) => -(140 + index * 26)

/**
 * A single book's entrance.
 *
 * Three properties are timed independently:
 *  - `y`      a spring stiff enough to land hard, damped just under critical so
 *             it settles with one small rebound instead of oscillating;
 *  - `scaleY` a squash-and-recover keyframe fired on impact, anchored to the
 *             book's bottom edge (see `.book` transform-origin) so it reads as
 *             weight hitting the shelf;
 *  - `rotate` a slight tilt that resolves as the book beds down, alternating
 *             direction per book so the stack never looks mechanical.
 *
 * `custom` carries the index; framer-motion passes it to these functions.
 */
export const bookVariants: Variants = {
  hidden: (index: number) => ({
    y: dropDistance(index),
    opacity: 0,
    rotate: index % 2 === 0 ? -0.9 : 0.9,
    scaleY: 1.05,
  }),
  visible: (index: number) => {
    const delay = BOOK_LEAD_IN + index * BOOK_STAGGER
    return {
      y: 0,
      opacity: 1,
      rotate: 0,
      // Overshoot on impact, compress, then recover: 1.05 → 0.93 → 1.02 → 1.
      scaleY: [1.05, 0.93, 1.02, 1],
      transition: {
        y: { type: 'spring', stiffness: 340, damping: 21, mass: 1.05, delay },
        rotate: { type: 'spring', stiffness: 240, damping: 24, mass: 1, delay },
        opacity: { duration: 0.22, ease: 'linear', delay },
        scaleY: {
          duration: 0.62,
          times: [0, 0.46, 0.7, 1],
          ease: EASE_OUT_QUART,
          delay,
        },
      },
    }
  },
  /** prefers-reduced-motion: arrive, don't fall. */
  static: (index: number) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    scaleY: 1,
    transition: { duration: 0.3, ease: EASE_OUT_QUART, delay: index * 0.03 },
  }),
}

/** The shelf plinth slides up to meet the last book instead of just appearing. */
export const plinthVariants = (bookCount: number): Variants => ({
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
      delay: BOOK_LEAD_IN + bookCount * BOOK_STAGGER,
    },
  },
  static: { y: 0, opacity: 1, transition: { duration: 0.3 } },
})

/* -------------------------------------------------------------------------- */
/* Scroll reveals                                                              */
/* -------------------------------------------------------------------------- */

export const revealTransition: Transition = {
  duration: 0.62,
  ease: EASE_OUT_EXPO,
}

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
  static: { opacity: 1, y: 0, transition: { duration: 0.01 } },
}

/**
 * Viewport config shared by every scroll reveal. The margin has to be in px:
 * IntersectionObserver rejects percentage rootMargin values, and framer-motion
 * silently drops the observer when it does.
 */
export const revealViewport = { once: true, amount: 0.15, margin: '0px 0px -64px 0px' } as const
