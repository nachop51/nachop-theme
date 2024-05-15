import color from 'chroma-js'

const colors = {
  editor: {
    bg: '#10111b',
    fg: '#dcdfeb'
  },
  ui: {
    bg: '#0d0e16',
    fg: '#707a8c'
  },
  gutter: '#495162',
  cursor: '#dc52ff',

  border: '#1e232b',
  primary: '#aeaaff',
  accent: '#695380',

  warn: '#ffd173',
  success: '#99cc99',
  info: '#80bfff',
  error: '#f7575f',

  keywords: '#ad72f3',
  variables: '#ee6584',
  tag: '#f07178',
  string: '#cae790',
  func: {
    name: '#79b9ee',
    param: '#cba7f0',
    lambda: '#ad72f3',
    call: '#ffd173'
  },

  const: '#f5dd87',
  macros: '#f29e74',
  punctuation: '#9899c5',
  comment: '#546E7A',
  class: '#FFCB6B',
  numeric: '#F78C6C',
  regexp: '#95e6cb',

  shadow: '#00000050'
}

const git = {
  added: color(colors.success),
  untracked: color(colors.success).alpha(0.7),
  modified: color(colors.info).alpha(0.7),
  deleted: color(colors.error).alpha(0.7),
  ignored: color(colors.ui.fg).alpha(0.5),
  removed: color(colors.warn).alpha(0.7)
}

const syntax = {
  tag: color(colors.tag),
  func: {
    name: color(colors.func.name),
    param: color(colors.func.param),
    lambda: color(colors.func.lambda),
    call: color(colors.func.call)
  },
  entity: color(colors.accent),
  string: color(colors.string),
  regexp: color(colors.regexp),
  markup: color(colors.success),
  keyword: color(colors.keywords),
  special: color(colors.warn),
  comment: color(colors.comment),
  constant: color(colors.const),
  operator: color(colors.info),
  variables: color(colors.variables),
  punctuation: color(colors.punctuation),
  numeric: color(colors.numeric),
  class: color(colors.class),
  macros: color(colors.macros),
  misc: color(colors.accent)
}

const editor = {
  bg: color(colors.editor.bg),
  fg: color(colors.editor.fg),
  // line: color('#') ??
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
    active: color(colors.primary).alpha(0.5),
    normal: color(colors.primary).alpha(0.1)
  }
}

const ui = {
  fg: color(colors.ui.fg),
  bg: color(colors.ui.bg),
  cursor: color(colors.cursor),
  border: color(colors.border),
  borderActive: color(colors.primary),
  selection: {
    active: color(colors.accent).darken(0.5).alpha(0.6),
    normal: color(colors.accent).darken(0.5).alpha(0.3)
  },
  panel: {
    bg: color(colors.editor.bg),
    shadow: color(colors.shadow)
  }
}

const common = {
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

const terminal = {
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

export default {
  syntax,
  git,
  ui,
  terminal,
  common,
  editor
}
