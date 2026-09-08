import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

export function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    // A plain window.scrollTo would move the page without telling Lenis, leaving its
    // internal target/animated scroll values stale — the next smooth scroll would then
    // jump from the wrong position. lenis.scrollTo keeps it in sync; when Lenis isn't
    // mounted (reduced motion), fall back to the native call.
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, lenis])

  return null
}
