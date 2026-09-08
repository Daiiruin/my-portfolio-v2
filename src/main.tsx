import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyle } from './design-system/theme'
import './design-system/theme/types'
import App from './App'
import './i18n/config'

// The site is dark-only by design: a diegetic terminal world has no light-mode
// equivalent, so there is no theme switch and never was a `mode` prop to wire up.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
