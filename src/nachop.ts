import darkTheme from './themes/dark.js'
// import darkerTheme from './themes/darker.js'
// import piggyTheme from './themes/piggy.js'
import lightTheme from './themes/light.js'
import type { FullTheme } from './types.d.ts'

export type Schemas = 'dark' | 'light' // | 'darker' | 'piggy'

const nachopColors: Record<Schemas, FullTheme> = {
  dark: darkTheme,
  // darker: darkerTheme
  // piggy: piggyTheme
  light: lightTheme
}

export default nachopColors
