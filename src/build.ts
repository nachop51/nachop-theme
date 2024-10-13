import { buildThemeFromColors } from 'vs-theme-builder'
import fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import darkSchema from './schemas/dark.js'
import lightSchema from './schemas/light.js'
import facuSchema from './schemas/facu.js'
import piggySchema from './schemas/piggy.js'

function filePath (name: string) {
  return path.join(cwd(), 'themes', `${name.toLowerCase().replaceAll(' ', '-')}.json`)
}

const themes: Array<{ name: string } & object> = [
  buildThemeFromColors({ colors: darkSchema, name: 'Nachop Dark', isBordered: true }) as { name: string },
  buildThemeFromColors({ colors: darkSchema, name: 'Nachop Dark', isBordered: false }) as { name: string },
  buildThemeFromColors({ colors: lightSchema, name: 'Nachop Light', isBordered: true, type: 'light' }) as { name: string },
  buildThemeFromColors({ colors: lightSchema, name: 'Nachop Light', isBordered: false, type: 'light' }) as { name: string },
  buildThemeFromColors({ colors: facuSchema, name: 'Facu', isBordered: true }) as { name: string },
  buildThemeFromColors({ colors: facuSchema, name: 'Facu', isBordered: false }) as { name: string },
  buildThemeFromColors({ colors: piggySchema, name: 'Piggy', isBordered: true }) as { name: string }, buildThemeFromColors({ colors: piggySchema, name: 'Piggy', isBordered: false }) as { name: string }
]

// Object.entries(nachopColors).forEach(([name, scheme]) => {
//   const bordered = buildThemeFromScheme({ name, scheme, isBordered: true })
//   const nonBordered = buildThemeFromScheme({ name, scheme, isBordered: false })

//   fs.writeFileSync(filePath(name, true), JSON.stringify(bordered))
//   fs.writeFileSync(filePath(name, false), JSON.stringify(nonBordered))
// })

let packageJsonChanged = false
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8')) as {
  contributes: {
    themes: Array<{ label: string, uiTheme: string, path: string }>
  }
}

for (const theme of themes) {
  const fileName = filePath(theme.name)

  fs.writeFileSync(fileName, JSON.stringify(theme))

  const themeIndex = packageJson.contributes.themes.findIndex(
    (file) => file.path === path.relative('.', fileName)
  )

  if (themeIndex === -1) {
    packageJson.contributes.themes.push({
      label: theme.name,
      // @ts-expect-error type always exists
      uiTheme: theme.type === 'light' ? 'vs-light' : 'vs-dark',
      path: path.relative('.', fileName)
    })
    packageJsonChanged = true
  }
}

if (packageJsonChanged) {
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2))
}
