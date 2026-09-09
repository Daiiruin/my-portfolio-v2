import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { StyledGlitchText } from './GlitchText.styles'

const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#01ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// MIN_TICKS * TICK_INTERVAL_MS is the floor - every character scrambles for at least
// ~700ms before it's allowed to lock in, so the decode reads as an actual effect
// instead of a flash.
const MIN_TICKS = 14
const MAX_TICKS = 20
const TICK_INTERVAL_MS = 50
// Start delay is driven by each character's position (see charStartDelay), not pure
// randomness - a character halfway through the string starts roughly halfway through
// CASCADE_MS. Without that, characters lock in at close to the same moment regardless
// of where they sit, and the decode reads as one simultaneous flash instead of a sweep.
// JITTER_MS keeps neighboring characters from starting in perfect lockstep.
const CASCADE_MS = 500
const JITTER_MS = 120

function charStartDelay(index: number, lastIndex: number) {
  const position = lastIndex > 0 ? index / lastIndex : 0
  return position * CASCADE_MS + Math.random() * JITTER_MS
}

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
}

function scrambled(text: string) {
  return text.split('').map((c) => (c === ' ' ? ' ' : randomChar()))
}

type Props = {
  text: string
}

// Settles once per mount (or per text change) instead of scrambling forever - the
// infinite loop was the amateur tell here. A one-shot decode reads as intentional; a
// loop reads as a gimmick that never stops.
export function GlitchText({ text }: Props) {
  const reducedMotion = useReducedMotion()
  const nothingToScramble = text.trim() === ''
  const [prevText, setPrevText] = useState(text)
  const [chars, setChars] = useState(() => (reducedMotion ? text.split('') : scrambled(text)))
  const [settled, setSettled] = useState(reducedMotion || nothingToScramble)

  if (text !== prevText) {
    setPrevText(text)
    setChars(reducedMotion ? text.split('') : scrambled(text))
    setSettled(reducedMotion || nothingToScramble)
  }

  useEffect(() => {
    if (reducedMotion) return

    // No special-case for an all-spaces string: the forEach below simply schedules no
    // timeouts, so this is already a no-op - `settled` was set correctly for that case
    // by the render-time sync above.
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const target = prevText.split('')
    const lastIndex = target.length - 1

    let remaining = target.filter((c) => c !== ' ').length

    target.forEach((char, index) => {
      if (char === ' ') return

      const totalTicks = MIN_TICKS + Math.floor(Math.random() * (MAX_TICKS - MIN_TICKS + 1))
      let tick = 0

      const step = () => {
        tick += 1
        const done = tick >= totalTicks
        setChars((prev) => {
          const next = [...prev]
          next[index] = done ? char : randomChar()
          return next
        })
        if (done) {
          remaining -= 1
          if (remaining === 0) setSettled(true)
        } else {
          timeouts[index] = setTimeout(step, TICK_INTERVAL_MS)
        }
      }

      timeouts[index] = setTimeout(step, charStartDelay(index, lastIndex))
    })

    return () => timeouts.forEach(clearTimeout)
  }, [prevText, reducedMotion])

  return (
    <StyledGlitchText $settled={settled} data-text={chars.join('')} aria-label={text}>
      {chars.join('')}
    </StyledGlitchText>
  )
}
