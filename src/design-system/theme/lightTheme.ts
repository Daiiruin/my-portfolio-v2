import { tokens } from './tokens'

// Phase 2 — light theme colors will override tokens.colors here
export const lightTheme = {
  ...tokens,
  mode: 'light' as const,
}
