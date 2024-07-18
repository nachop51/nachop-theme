import color from 'chroma-js'
import type { Common, Editor, FullTheme, Git, Syntax, Terminal, UserInterface } from '../types.d.ts'

const colors = {
  editor: {
    bg: '#F8F4FA',
    fg: '#5c6166'
  },
  ui: {
    bg: '#F5F3F5',
    fg: '#8a9199'
  },

  cursor: '#FF00E4',
  gutter: '#495162',

  border: '#ECDEFF',

  primary: '#aeaaff',
  primaryContent: '#fff',
  accent: '#6C51E2',

  // Misc colors
  success: '#98ca9a',
  info: '#42A0ED',
  warn: '#F09C60',
  error: '#E04A7E',

  keyword: '#ad72f3',
  variables: '#ee6584',
  string: '#46C42D',
  func: {
    name: '#42A0ED',
    param: '#DD9FFC',
    lambda: '#ad72f3',
    call: '#ffd173'
  },

  const: '#F0B838',
  macros: '#f29e74',
  punctuation: '#9899c5',
  comment: '#546E7A',
  class: '#FFA861',
  numeric: '#BB99FF',
  regexp: '#58DBAF',

  shadow: '#BB99FF40',

  brackets: {
    1: '#f3a84d',
    2: '#e68aff',
    3: '#49d9e8'
  }
}

const syntax: Syntax = {
  keyword: color(colors.keyword),

  func: {
    name: color(colors.func.name),
    param: color(colors.func.param),
    lambda: color(colors.func.lambda),
    call: color(colors.func.call)
  },

  class: {
    name: color(colors.class)
  },

  langs: {
    html: {
      tag: color(colors.punctuation),
      tagName: color(colors.variables),
      attributes: color(colors.macros).luminance(0.35).brighten(0.1)
    },
    css: {
      class: color(colors.class),
      id: color(colors.regexp),
      pseudo: color('#85A5FF'),
      properties: color(colors.func.name).brighten(0.75),
      units: color(colors.numeric)
    },
    markup: {
      heading: color(colors.variables),
      punctuation: color(colors.punctuation)
    }
  },

  punctuation: color(colors.punctuation),
  comment: color(colors.comment),
  string: color(colors.string),
  numeric: color(colors.numeric),
  operator: color(colors.info),

  variables: color(colors.variables),
  constant: color(colors.const),
  macros: color(colors.macros),

  regexp: color(colors.regexp),
  special: color(colors.warn),
  misc: color(colors.accent)
}

const editor: Editor = {
  bg: color(colors.editor.bg),
  fg: color(colors.editor.fg),
  cursor: color(colors.cursor),
  selection: {
    active: color(colors.accent).alpha(0.15),
    inactive: color(colors.accent).alpha(0.1)
  },
  findMatch: {
    active: color(colors.accent).brighten(0.5).alpha(0.4),
    inactive: color(colors.accent).alpha(0.25)
  },
  gutter: {
    active: color(colors.gutter),
    normal: color(colors.gutter).alpha(0.5)
  },
  indentGuide: {
    active: color(colors.primary).alpha(0.6),
    normal: color(colors.primary).alpha(0.1)
  }
}

const ui: UserInterface = {
  fg: color(colors.ui.fg),
  bg: color(colors.ui.bg),
  border: color(colors.border),
  borderActive: color(colors.primary),
  selection: {
    active: color(colors.accent).alpha(0.2),
    hover: color(colors.accent).alpha(0.1),
    normal: color(colors.accent).alpha(0.2)
  },
  panel: {
    bg: color(colors.editor.bg),
    shadow: color(colors.shadow)
  }
}

const common: Common = {
  primary: color(colors.primary),
  primaryContent: color(colors.primaryContent),
  accent: color(colors.accent),
  info: color(colors.info),
  warn: color(colors.warn),
  success: color(colors.success),
  error: color(colors.error),
  brackets1: color(colors.brackets[1]),
  brackets2: color(colors.brackets[2]),
  brackets3: color(colors.brackets[3])
}

const git: Git = {
  added: color(colors.success),
  modified: color(colors.info).alpha(0.7),
  deleted: color(colors.error).alpha(0.7),
  ignored: color(colors.ui.fg).alpha(0.5)
}

const terminal: Terminal = {
  ansiBlack: color('#3f4451'),
  ansiBrightBlack: color('#4f5666'),
  ansiBlue: color('#4aa5f0'),
  ansiBrightBlue: color('#4dc4ff'),
  ansiCyan: color('#42b3c2'),
  ansiBrightCyan: color('#4cd1e0'),
  ansiGreen: color('#8cc265'),
  ansiBrightGreen: color('#a5e075'),
  ansiRed: color('#e05561'),
  ansiBrightRed: color('#ff616e'),
  ansiMagenta: color('#c162de'),
  ansiBrightMagenta: color('#de73ff'),
  ansiYellow: color('#f0c758'),
  ansiBrightYellow: color('#ffec80'),
  ansiWhite: color('#d7dae0'),
  ansiBrightWhite: color('#e6e6e6'),
  background: color(colors.ui.bg),
  border: color(colors.border),
  foreground: color(colors.editor.fg).darken(0.3),
  selectionBackground: color(colors.accent).darken(0.5).alpha(0.6)
}

const theme: FullTheme = {
  type: 'light',
  syntax,
  git,
  ui,
  terminal,
  common,
  editor
}

export default theme
