import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import { HomePage } from './pages/HomePage/HomePage'
import { DevPage } from './pages/DevPage/DevPage'
import { ScrollToTop } from './components/ScrollToTop'
import { RouteTransition } from './components/RouteTransition'
import { GridOverlay } from './design-system/atoms/GridOverlay'
import { CRTOverlay } from './design-system/atoms/CRTOverlay'
import { CustomCursor } from './design-system/atoms/CustomCursor'
import { BootSequence } from './design-system/organisms/BootSequence'
import { CommandPrompt } from './design-system/organisms/CommandPrompt'
import { NexusVoice } from './design-system/organisms/NexusVoice'
import { BootProvider } from './contexts/BootContext'
import { useReducedMotion } from './hooks/useReducedMotion'

const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage/ProjectDetailPage').then((m) => ({
    default: m.ProjectDetailPage,
  }))
)

export default function App() {
  const reducedMotion = useReducedMotion()

  const content = (
    <BootProvider>
      <Suspense fallback={null}>
        <GridOverlay />
        <CRTOverlay />
        <CustomCursor />
        <RouteTransition />
        <BootSequence />
        <CommandPrompt />
        <NexusVoice />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          {import.meta.env.DEV && <Route path="/dev/components" element={<DevPage />} />}
        </Routes>
      </Suspense>
    </BootProvider>
  )

  // Skip Lenis entirely under reduced motion rather than mounting it with smoothing
  // disabled - native scroll then behaves exactly as the OS setting promises.
  if (reducedMotion) return content

  return (
    // `anchors: true` reads each target's own scroll-margin-top (see Section.styles.ts /
    // HeroBlock.styles.ts) instead of a single hardcoded offset here.
    <ReactLenis root options={{ anchors: true }}>
      {content}
    </ReactLenis>
  )
}
