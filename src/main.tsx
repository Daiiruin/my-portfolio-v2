import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppThemeProvider } from './contexts/ThemeContext'
import './design-system/theme/types'
import App from './App'
import './i18n/config'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
