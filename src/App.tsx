import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>my-portfolio-ad</h1>
        <p>PR #1 — scaffold ✅ Design system arrives in PR #2.</p>
      </div>} />
    </Routes>
  )
}
