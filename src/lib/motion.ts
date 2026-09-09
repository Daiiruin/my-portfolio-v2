import type { Variants } from 'motion/react'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// Variante pour whileInView (sections secondaires)
export const fadeInUpScroll: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Versions sans mouvement pour prefers-reduced-motion
export const reducedFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

export const reducedStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

// Nested-stagger reveal used by RevealText - a masked word/char sweep instead of the
// blanket fadeInUp above. `revealContainer` inherits hidden/visible propagated from an
// ancestor (whileInView, etc., same convention as every other reveal here) and cascades
// its own stagger timing down to `revealSegment` children.
export const revealContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

export const revealSegment: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export const reducedRevealContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
}

export const reducedRevealSegment: Variants = {
  hidden: { y: '0%' },
  visible: { y: '0%', transition: { duration: 0 } },
}

// Pure state relay: propagates an ancestor's hidden/visible signal to nested motion
// components without adding its own transform. Use on a wrapper that would otherwise
// double-animate the same text its RevealText child is already revealing.
export const passthrough: Variants = { hidden: {}, visible: {} }
