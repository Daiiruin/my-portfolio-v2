import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'motion/react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { Dot, Trail } from './CustomCursor.styles'

export type CursorState = 'default' | 'link' | 'text'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], summary'
const TEXT_SELECTOR = 'input:not([type="submit"]):not([type="checkbox"]), textarea, [contenteditable="true"]'

export function CustomCursor() {
  const reducedMotion = useReducedMotion()
  const [pointerFine] = useState(
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  )
  const enabled = pointerFine && !reducedMotion
  const [state, setState] = useState<CursorState>('default')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const trailX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 })
  const trailY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 })

  useEffect(() => {
    if (!enabled) return

    document.body.classList.add('custom-cursor-active')

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)

      const target = e.target as Element
      if (target.closest(TEXT_SELECTOR)) setState('text')
      else if (target.closest(INTERACTIVE_SELECTOR)) setState('link')
      else setState('default')
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <Trail $state={state} style={{ x: trailX, y: trailY }} aria-hidden="true" />
      <Dot style={{ x, y }} aria-hidden="true" />
    </>
  )
}
