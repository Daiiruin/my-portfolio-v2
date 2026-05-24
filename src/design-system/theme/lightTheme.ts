import { tokens } from './tokens'

export const lightTheme = {
  ...tokens,
  mode: 'light' as const,
  colors: {
    ...tokens.colors,
    background: '#fafafa',
    surface: '#ffffff',
    surfaceAlt: '#f0f0f0',
    border: '#e4e4e7',
    borderHover: '#d4d4d8',
    text: '#09090b',
    textMuted: '#52525b',
    textSubtle: '#a1a1aa',
    accentSubtle: 'rgba(59, 130, 246, 0.10)',
  },
  shadow: {
    sm: '0 1px 4px rgba(0,0,0,0.06)',
    md: '0 4px 16px rgba(0,0,0,0.08)',
    lg: '0 12px 40px rgba(0,0,0,0.12)',
  },
}
