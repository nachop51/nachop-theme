import darkTheme from './themes/dark.js'
import darkerTheme from './themes/darker.js'
// import lightTheme from './themes/light.js'

export type SchemaType = typeof darkTheme

export type Schemas = 'dark' | 'darker' // | 'light'

const nachopColors: Record<Schemas, SchemaType> = {
  dark: darkTheme,
  darker: darkerTheme
  // light: lightTheme
}

export default nachopColors
