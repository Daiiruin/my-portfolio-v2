import 'styled-components'
import type { darkTheme } from './darkTheme'

type AppTheme = Omit<typeof darkTheme, 'mode'> & { mode: 'dark' | 'light' }

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
