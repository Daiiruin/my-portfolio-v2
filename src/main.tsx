import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'

// i18n initialized in src/i18n/config.ts — imported for side effects
import './i18n/config'

// Placeholder theme — replaced in PR #2 with real darkTheme
const placeholderTheme = {}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={placeholderTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
