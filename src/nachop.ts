import darkTheme from './themes/dark.js'
// import lightTheme from './themes/light.js'

export type SchemaType = typeof darkTheme

export type Schemas = 'dark' // | 'light'

const nachopColors: Record<Schemas, SchemaType> = {
  dark: darkTheme
  // light: lightTheme
}

export default nachopColors
