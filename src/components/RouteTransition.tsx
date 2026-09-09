import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'motion/react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const Wipe = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background};
  transform-origin: bottom;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.toast};
`

// A scanline-style wipe on route change, standing in for a cross-fade. Remounting on
// `key={pathname}` is enough on its own - React swaps the route content in the same
// commit as the key change, so the panel's shrink-away is what the visitor actually
// sees "revealing" the new page; no AnimatePresence/exit choreography needed for a
// reveal-only overlay like this.
export function RouteTransition() {
  const { pathname } = useLocation()
  const reducedMotion = useReducedMotion()

  if (reducedMotion) return null

  return (
    <Wipe
      key={pathname}
      aria-hidden="true"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
    />
  )
}
