import { useState, useEffect } from 'react'

export const NAV_SECTION_IDS = ['about', 'stack', 'career', 'projects', 'contact'] as const
export type NavSectionId = (typeof NAV_SECTION_IDS)[number]

export function useScrollSpy(): NavSectionId | '' {
  const [activeId, setActiveId] = useState<NavSectionId | ''>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id as NavSectionId)
          }
        })
      },
      { rootMargin: '-15% 0px -65% 0px' },
    )

    NAV_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}
