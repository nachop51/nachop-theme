import { exists, mkdir, readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { cwd } from 'node:process'
import {
  type BuildThemeFromColorsOptions,
  type BuildThemeFromSchemeOptions,
  buildThemeFromColors,
  buildThemeFromScheme,
} from 'vs-theme-builder'
import packageJson from '../package.json' with { type: 'json' }
import {
  darkColors,
  juiceScheme,
  lightColors,
  nightyColors,
  piggyColors,
} from './schemas/index.js'

function filePath(
  theme: BuildThemeFromColorsOptions | BuildThemeFromSchemeOptions
) {
  const name = theme.isBordered ? `${theme.name} Bordered` : theme.name

  return path.join(
    cwd(),
    'themes',
    `${name.toLowerCase().replaceAll(' ', '-')}.json`
  )
}

async function saveToThemesDir(
  themes: (BuildThemeFromColorsOptions | BuildThemeFromSchemeOptions)[]
) {
  const themesDirPath = path.join(cwd(), 'themes')

  if (!(await exists(themesDirPath))) {
    await mkdir(themesDirPath)
  } else {
    // Clean up existing themes
    const files = await readdir(themesDirPath)
    for (const file of files) {
      await rm(path.join(themesDirPath, file))
    }
  }

  for (const theme of themes) {
    const fileName = filePath(theme)

    let builtTheme: object

    if ('scheme' in theme) {
      builtTheme = buildThemeFromScheme(theme)
    } else {
      builtTheme = buildThemeFromColors(theme)
    }

    await Bun.write(fileName, JSON.stringify(builtTheme))
  }
}

export async function saveToPackageJsonThemesEntry(
  themes: (BuildThemeFromColorsOptions | BuildThemeFromSchemeOptions)[]
) {
  // Bulk update package.json contributes.themes
  packageJson.contributes = { themes: [] }

  for (const theme of themes) {
    const fileName = filePath(theme)

    const uiTheme =
      ('scheme' in theme ? theme.scheme.type : theme.type) === 'light'
        ? 'vs'
        : 'vs-dark'

    packageJson.contributes.themes.push({
      label: theme.name + (theme.isBordered ? ' Bordered' : ''),
      path: path.relative('.', fileName),
      uiTheme: uiTheme,
    })
  }

  await Bun.write('package.json', JSON.stringify(packageJson, null, 2))
}

const themes = [
  {
    colors: darkColors,
    name: 'Nachop Dark',
    isBordered: true,
  },
  {
    colors: darkColors,
    name: 'Nachop Dark',
    isBordered: false,
  },
  {
    colors: lightColors,
    name: 'Nachop Light',
    isBordered: true,
    type: 'light',
  },
  {
    colors: lightColors,
    name: 'Nachop Light',
    isBordered: false,
    type: 'light',
  },
  {
    colors: piggyColors,
    name: 'Piggy',
    isBordered: true,
  },
  {
    colors: piggyColors,
    name: 'Piggy',
    isBordered: false,
  },
  {
    colors: nightyColors,
    name: 'Nighty',
    isBordered: true,
  },
  {
    scheme: juiceScheme,
    name: 'Dark Juice',
  },
] satisfies (BuildThemeFromColorsOptions | BuildThemeFromSchemeOptions)[]

await saveToThemesDir(themes)
await saveToPackageJsonThemesEntry(themes)
