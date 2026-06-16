import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { DevPage } from './pages/DevPage/DevPage'
import { ScrollToTop } from './components/ScrollToTop'

const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage/ProjectDetailPage').then((m) => ({
    default: m.ProjectDetailPage,
  }))
)

export default function App() {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        {import.meta.env.DEV && <Route path="/dev/components" element={<DevPage />} />}
      </Routes>
    </Suspense>
  )
}
