import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { LuX } from 'react-icons/lu'
import { Icon } from '../../atoms/Icon'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { Wrapper, Label, Message, CloseButton } from './NexusVoice.styles'

const SCROLL_THRESHOLD_PX = 200
const INACTIVITY_MS = 45000
const CHECK_INTERVAL_MS = 5000
const AUTO_DISMISS_MS = 7000
const TYPE_INTERVAL_MS = 35

const LINES_BY_LOCALE = {
  fr: {
    scroll: "Hé, c'est Nexus. Je te vois... J'espère que tu va trouvé ce que tu cherche.",
    inactivity: 'Tu es toujours là ?',
    contactSent: "Transmission reçue. Ne t'attends pas à une réponse rapide hahaha.",
    commandPrompt: "Hé. n'essaie rien de bizarre ici.",
    overrideTaunt:
      "Ahahah ! Tu penses vraiment avoir une chance contre moi ? Sérieusement ? Je ne doute pas une seconde de tes capacités... mais crois-moi, c'est peine perdue. Amuse-toi bien quand même.",
  },
  en: {
    scroll: "Hey, it's Nexus. I see you... Hope you find what you're looking for.",
    inactivity: "You're still here?",
    contactSent: "Transmission received. Don't expect a fast reply hahaha.",
    commandPrompt: "Hey. Don't try anything weird in here.",
    overrideTaunt:
      "Hah! You really think you stand a chance against me? Seriously? I don't doubt your skills for a second... but trust me, it's a lost cause. Have fun anyway.",
  },
}

export function NexusVoice() {
  const reducedMotion = useReducedMotion()
  const location = useLocation()
  const lines = useLocaleData(LINES_BY_LOCALE)
  const [message, setMessage] = useState<string | null>(null)
  const [prevMessage, setPrevMessage] = useState<string | null>(null)
  const [displayedText, setDisplayedText] = useState('')

  if (message !== prevMessage) {
    setPrevMessage(message)
    setDisplayedText('')
  }
  const dismissTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const lastActivity = useRef(0)
  const firedScroll = useRef(false)
  const firedInactivity = useRef(false)
  const firedCommandPrompt = useRef(false)
  const [firedOverride, setFiredOverride] = useState(false)

  useEffect(() => {
    if (reducedMotion) return

    lastActivity.current = Date.now()

    const markActivity = () => {
      lastActivity.current = Date.now()
    }

    const onScroll = () => {
      markActivity()
      const onOverridePage = location.pathname === '/projects/override'
      if (!firedScroll.current && !onOverridePage && window.scrollY > SCROLL_THRESHOLD_PX) {
        firedScroll.current = true
        setMessage(lines.scroll)
      }
    }

    const onContactSent = () => setMessage(lines.contactSent)

    const onCommandPromptOpened = () => {
      if (firedCommandPrompt.current) return
      firedCommandPrompt.current = true
      setMessage(lines.commandPrompt)
    }

    const inactivityCheck = setInterval(() => {
      if (!firedInactivity.current && Date.now() - lastActivity.current > INACTIVITY_MS) {
        firedInactivity.current = true
        setMessage(lines.inactivity)
      }
    }, CHECK_INTERVAL_MS)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', markActivity)
    window.addEventListener('keydown', markActivity)
    window.addEventListener('contact:sent', onContactSent)
    window.addEventListener('command-prompt:opened', onCommandPromptOpened)

    return () => {
      clearInterval(inactivityCheck)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', markActivity)
      window.removeEventListener('keydown', markActivity)
      window.removeEventListener('contact:sent', onContactSent)
      window.removeEventListener('command-prompt:opened', onCommandPromptOpened)
    }
  }, [reducedMotion, lines, location.pathname])

  if (!reducedMotion && !firedOverride && location.pathname === '/projects/override') {
    setFiredOverride(true)
    setMessage(lines.overrideTaunt)
  }

  useEffect(() => {
    clearTimeout(dismissTimer.current)
    if (!prevMessage) return

    let i = 0
    const typeTick = setInterval(() => {
      i += 1
      setDisplayedText(prevMessage.slice(0, i))
      if (i >= prevMessage.length) {
        clearInterval(typeTick)
        dismissTimer.current = setTimeout(() => setMessage(null), AUTO_DISMISS_MS)
      }
    }, TYPE_INTERVAL_MS)

    return () => clearInterval(typeTick)
  }, [prevMessage])

  const dismiss = () => {
    clearTimeout(dismissTimer.current)
    setMessage(null)
  }

  return (
    <AnimatePresence>
      {message && (
        <Wrapper
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          <Label>NEXUS</Label>
          <Message>{displayedText}</Message>
          <CloseButton onClick={dismiss} aria-label="Dismiss">
            <Icon icon={LuX} size={14} />
          </CloseButton>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}
