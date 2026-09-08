import { useState, type ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { BootContext } from './bootContext'

export function BootProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion()
  const [seen, setSeen] = useState(() => sessionStorage.getItem('boot-seen') === '1')

  // Reduced motion skips the boot outright — there's nothing to animate anyway, and
  // components gating on `booting` (the Hero's GlitchText swap) should just render
  // their settled state immediately.
  const booting = !reducedMotion && !seen

  const finishBoot = () => {
    sessionStorage.setItem('boot-seen', '1')
    setSeen(true)
  }

  return <BootContext.Provider value={{ booting, finishBoot }}>{children}</BootContext.Provider>
}
