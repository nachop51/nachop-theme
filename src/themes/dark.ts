import color from '../color.js'

const colors = {
  editor: {
    bg: '#242936',
    fg: '#dcdfeb'
  },
  ui: {
    bg: '#1f2430',
    fg: '#707a8c'
  },
  gutter: '#495162',

  border: '#171b24',
  primary: '#aeaaff',
  accent: '#695380',

  warn: '#ffd173',
  success: '#99cc99',
  info: '#80bfff',
  error: '#c24038',

  keywords: '#ad72f3',
  variables: '#ee6584',
  tag: '#f07178',
  string: '#cae790',
  func: {
    name: '#79b9ee',
    param: '#c3a6ff',
    lambda: '#ffcc66'
  },
  const: '#f5dd87',
  punctuation: '#9899c5',
  comment: '#546E7A'
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
    lambda: color(colors.func.lambda)
  },
  entity: color(colors.accent),
  string: color(colors.string),
  regexp: color(colors.success),
  markup: color(colors.success),
  keyword: color(colors.keywords),
  special: color(colors.warn),
  comment: color(colors.comment),
  constant: color(colors.const),
  operator: color(colors.info),
  variables: color(colors.variables),
  punctuation: color(colors.punctuation)
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
  border: color(colors.border),
  borderActive: color(colors.primary),
  selection: {
    active: color(colors.accent).darken(0.5).alpha(0.6),
    normal: color(colors.accent).darken(0.5).alpha(0.3)
  },
  panel: {
    bg: color(colors.editor.bg),
    shadow: color('#000000').alpha(0.4)
  }
}

const common = {
  primary: color(colors.primary),
  accent: color(colors.accent),
  info: color(colors.info),
  warn: color(colors.warn),
  success: color(colors.success),
  error: color(colors.error)
}

// todo
const terminal = {
  ansiBlack: color(colors.editor.bg),
  ansiBlue: color(colors.info),
  ansiBrightBlack: color(colors.ui.fg).darken(0.2),
  ansiBrightBlue: color(colors.info).brighten(0.2),
  ansiBrightCyan: color(colors.primary).brighten(0.2),
  ansiBrightGreen: color(colors.success).brighten(0.2),
  ansiBrightMagenta: color(colors.warn).brighten(0.2),
  ansiBrightRed: color(colors.error).brighten(0.2),
  ansiBrightWhite: color(colors.ui.fg).brighten(0.2),
  ansiBrightYellow: color(colors.accent).brighten(0.2),
  ansiCyan: color(colors.primary),
  ansiGreen: color(colors.success),
  ansiMagenta: color(colors.warn),
  ansiRed: color(colors.error),
  ansiWhite: color(colors.ui.fg),
  ansiYellow: color(colors.accent),
  background: color(colors.ui.bg),
  border: color(colors.border),
  foreground: color(colors.ui.fg),
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
