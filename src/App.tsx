import { Routes, Route } from 'react-router-dom'
import { DevPage } from './pages/DevPage/DevPage'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: '2rem', fontFamily: 'inherit' }}>
            <h1 style={{ marginBottom: '8px' }}>Portfolio — PR #2 done</h1>
            <p style={{ color: '#888' }}>
              Design system ready. Visit{' '}
              <a href="/dev/components" style={{ color: '#3b82f6' }}>
                /dev/components
              </a>{' '}
              to see all atoms.
            </p>
          </div>
        }
      />
      {import.meta.env.DEV && <Route path="/dev/components" element={<DevPage />} />}
    </Routes>
  )
}
