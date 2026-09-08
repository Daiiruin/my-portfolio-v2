import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { StyledGlitchText } from './GlitchText.styles'

const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#01ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MIN_TICKS = 2
const MAX_TICKS = 5
const TICK_INTERVAL_MS = 45
const MAX_START_DELAY_MS = 200

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
}

function scrambled(text: string) {
  return text.split('').map((c) => (c === ' ' ? ' ' : randomChar()))
}

type Props = {
  text: string
}

// Settles once per mount (or per text change) instead of scrambling forever — the
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
    // timeouts, so this is already a no-op — `settled` was set correctly for that case
    // by the render-time sync above.
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const target = prevText.split('')

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

      timeouts[index] = setTimeout(step, Math.random() * MAX_START_DELAY_MS)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [prevText, reducedMotion])

  return (
    <StyledGlitchText $settled={settled} data-text={chars.join('')} aria-label={text}>
      {chars.join('')}
    </StyledGlitchText>
  )
}
