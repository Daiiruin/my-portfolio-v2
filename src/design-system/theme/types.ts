import 'styled-components'
import type { darkTheme } from './darkTheme'

type AppTheme = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
