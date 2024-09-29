import { buildThemeFromScheme, createSchemeFromColors } from 'vs-theme-builder'
import fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import darkSchema from './schemas/dark.js'
import lightSchema from './schemas/light.js'
import facuSchema from './schemas/facu.js'
import type { FullTheme } from 'vs-theme-builder'

function filePath (name: string, isBordered: boolean) {
  return path.join(cwd(), 'themes', `nachop-${name}${isBordered ? '-bordered' : ''}.json`)
}

const nachopColors: Record<string, FullTheme> = {
  dark: createSchemeFromColors({ colors: darkSchema }),
  light: createSchemeFromColors({ colors: lightSchema, type: 'light' }),
  facu: createSchemeFromColors({ colors: facuSchema })
}

Object.entries(nachopColors).forEach(([name, scheme]) => {
  const bordered = buildThemeFromScheme({ name, scheme, isBordered: true })
  const nonBordered = buildThemeFromScheme({ name, scheme, isBordered: false })

  fs.writeFileSync(filePath(name, true), JSON.stringify(bordered))
  fs.writeFileSync(filePath(name, false), JSON.stringify(nonBordered))
})
