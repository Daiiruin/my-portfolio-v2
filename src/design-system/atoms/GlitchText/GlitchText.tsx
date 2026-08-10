import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { StyledGlitchText } from './GlitchText.styles'

const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#01ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
}

type Props = {
  text: string
}

export function GlitchText({ text }: Props) {
  const reducedMotion = useReducedMotion()
  const [prevText, setPrevText] = useState(text)
  const [chars, setChars] = useState(() => text.split(''))

  if (text !== prevText) {
    setPrevText(text)
    setChars(text.split(''))
  }

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const timeouts: ReturnType<typeof setTimeout>[] = []

    text.split('').forEach((char, index) => {
      if (char === ' ') return

      const tick = () => {
        setChars((prev) => {
          const next = [...prev]
          next[index] = randomChar()
          return next
        })
        timeouts[index] = setTimeout(tick, 80 + Math.random() * 400)
      }

      timeouts[index] = setTimeout(tick, Math.random() * 400)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [text, reducedMotion])

  return <StyledGlitchText aria-label={text}>{chars.join('')}</StyledGlitchText>
}
