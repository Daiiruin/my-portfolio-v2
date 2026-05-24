import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../design-system/theme/darkTheme'
import { lightTheme } from '../design-system/theme/lightTheme'
import { GlobalStyle } from '../design-system/theme/GlobalStyle'

type ThemeContextValue = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: true,
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function getInitialTheme(): boolean {
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark((d) => !d)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
