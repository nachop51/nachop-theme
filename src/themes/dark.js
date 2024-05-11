import color from '../color.js'

const colors = {
  BG: '#242936',
  FG: '#dcdfeb',
  TAG: '#F78c6c',
  STRING: '#cae790',
  FUNC: {
    NAME: '#79b9ee',
    PARAM: '#c3a6ff',
    LAMBDA: '#ffcc66'
  },
  CONSTS: '#f29e74',
  PUNCTUATION: '#9899c5',
  PRIMARY: '#ad72f3',
  ACCENT: '#ffcc66',
  WARN: '#ff6666',
  SUCCESS: '#99cc99',
  INFO: '#6699cc',
  ERROR: '#ff6666'
}

const vcs = {
  added: color(colors.SUCCESS),
  modified: color(colors.ACCENT),
  removed: color(colors.WARN)
}

const syntax = {
  tag: color(colors.TAG),
  func: color(colors.FUNC),
  entity: color(colors.ACCENT),
  string: color(colors.STRING),
  regexp: color(colors.SUCCESS),
  markup: color(colors.SUCCESS),
  keyword: color(colors.WARN),
  special: color(colors.WARN),
  comment: color(colors.INFO),
  constant: color(colors.INFO),
  operator: color(colors.INFO)
}

const editor = {
  bg: color(colors.BG),
  fg: color(colors.FG),
  // line: color('#') ??
  selection: {
    active: color(colors.PRIMARY).alpha(0.3),
    inactive: color(colors.PRIMARY).alpha(0.1)
  },
  findMatch: {
    active: color(colors.PRIMARY),
    inactive: color(colors.PRIMARY).alpha(0.4)
  },
  gutter: {
    active: color(colors.PRIMARY).alpha(0.9),
    normal: color(colors.PRIMARY).alpha(0.6)
  },
  indentGuide: {
    active: color(colors.PRIMARY).alpha(0.5),
    normal: color(colors.PRIMARY).alpha(0.2)
  }
}

const ui = {
  fg: color(colors.FG),
  bg: color(colors.BG),
  line: color(colors.PRIMARY),
  selection: {
    active: color(colors.PRIMARY).alpha(0.3),
    normal: color(colors.PRIMARY).alpha(0.1)
  },
  panel: {
    bg: color(colors.BG),
    shadow: color(colors.BG).alpha(0.5)
  }
}

const common = {
  accent: color(colors.ACCENT),
  error: color(colors.ERROR)
}

export default {
  syntax,
  vcs,
  ui,
  common,
  editor
}
