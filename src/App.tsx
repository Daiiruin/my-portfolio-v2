import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage/ProjectDetailPage'
import { DevPage } from './pages/DevPage/DevPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      {import.meta.env.DEV && <Route path="/dev/components" element={<DevPage />} />}
    </Routes>
  )
}
