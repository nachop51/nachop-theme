import darkTheme from './themes/dark.js'
import lightTheme from './themes/light.js'
import type { FullTheme } from './types.d.ts'

export type Schemas = 'dark' | 'light'

const nachopColors: Record<Schemas, FullTheme> = {
  dark: darkTheme,
  light: lightTheme
}

export default nachopColors
