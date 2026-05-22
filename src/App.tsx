import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { DevPage } from './pages/DevPage/DevPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {import.meta.env.DEV && <Route path="/dev/components" element={<DevPage />} />}
    </Routes>
  )
}
