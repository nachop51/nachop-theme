import color from 'chroma-js'
import type { Common, Editor, FullTheme, Git, Syntax, Terminal, UserInterface } from '../types.d'

const colors = {
  editor: {
    bg: '#242936',
    fg: '#dcdfeb'
  },
  ui: {
    bg: '#1f2430',
    fg: '#6c739a'
  },
  cursor: '#dc52ff',
  gutter: '#495162',

  border: '#171b24',
  primary: '#aeaaff',
  accent: '#695380',

  warn: '#d09494',
  success: '#99cc99',
  info: '#80bfff',
  error: '#f7575f',

  keyword: '#ad72f3',
  variables: '#ee6584',
  tag: '#f07178',
  string: '#cae790',
  func: {
    name: '#79b9ee',
    param: '#e0bdf2',
    lambda: '#ad72f3',
    call: '#ffd173'
  },

  const: '#f5dd87',
  macros: '#f29e74',
  punctuation: '#9899c5',
  comment: '#546E7A',
  class: '#FFCB6B',
  numeric: '#c9adff',
  regexp: '#95e6cb',

  shadow: '#00000050'
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
      tag: color(colors.tag),
      attributes: color(colors.accent)
    },
    css: {
      class: color(colors.class),
      id: color(colors.regexp),
      pseudo: color(colors.info),
      properties: color(colors.func.name).brighten(0.75),
      units: color(colors.numeric)
    }
  },

  punctuation: color(colors.punctuation),
  comment: color(colors.comment),
  string: color(colors.string),
  numeric: color(colors.numeric),
  operator: color(colors.info),
  tag: color(colors.tag),

  variables: color(colors.variables),
  constant: color(colors.const),
  macros: color(colors.macros),

  entity: color(colors.accent),
  regexp: color(colors.regexp),
  markup: color(colors.success),
  special: color(colors.warn),
  misc: color(colors.accent)
}

const editor: Editor = {
  bg: color(colors.editor.bg),
  fg: color(colors.editor.fg),
  cursor: color(colors.cursor),
  selection: {
    active: color(colors.accent).darken(0.6).alpha(0.5),
    inactive: color(colors.accent).alpha(0.1)
  },
  findMatch: {
    active: color(colors.accent),
    inactive: color(colors.accent).alpha(0.4)
  },
  gutter: {
    active: color(colors.gutter),
    normal: color(colors.gutter).alpha(0.8)
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
    active: color(colors.accent).darken(0.4),
    hover: color(colors.accent).darken(0.5).alpha(0.3),
    normal: color(colors.accent).darken(0.5).alpha(0.3)
  },
  panel: {
    bg: color(colors.editor.bg),
    shadow: color(colors.shadow)
  }
}

const common: Common = {
  primary: color(colors.primary),
  accent: color(colors.accent),
  info: color(colors.info),
  warn: color(colors.warn),
  success: color(colors.success),
  error: color(colors.error),
  brackets1: color('#f3a84d'),
  brackets2: color('#e68aff'),
  brackets3: color('#49d9e8')
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
  syntax,
  git,
  ui,
  terminal,
  common,
  editor
}

export default theme
