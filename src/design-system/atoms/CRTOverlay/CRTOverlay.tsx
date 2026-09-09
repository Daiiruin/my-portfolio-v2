import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { Wrapper, Scanlines, Vignette } from './CRTOverlay.styles'

// The cliché CRT artifacts (scanlines, vignette), justified because they read as real
// screen imperfections rather than decoration. Cut entirely under reduced-motion - they
// carry no information, so there is nothing lost by removing them for that preference.
export function CRTOverlay() {
  const reducedMotion = useReducedMotion()
  if (reducedMotion) return null

  return (
    <Wrapper aria-hidden="true">
      <Scanlines />
      <Vignette />
    </Wrapper>
  )
}
