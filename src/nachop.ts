import darkTheme from './themes/dark.js'
import darkerTheme from './themes/darker.js'
import piggyTheme from './themes/piggy.js'
// import lightTheme from './themes/light.js'

export type SchemaType = typeof darkTheme

export type Schemas = 'dark' | 'darker' | 'piggy'// | 'light'

const nachopColors: Record<Schemas, SchemaType> = {
  dark: darkTheme,
  darker: darkerTheme,
  piggy: piggyTheme
  // light: lightTheme
}

export default nachopColors
