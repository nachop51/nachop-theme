import color from 'chroma-js'
import { type ColorScheme, createSchemeFromColors } from 'vs-theme-builder'

const colors: ColorScheme = {
  editor: {
    bg: '#0b0e14',
    fg: '#dcdfeb',
    cursor: '#ff0077',
    lineNumber: '#797d85',
  },
  ui: {
    bg: '#0b0e14',
    fg: '#6c739a',
    border: '#29292a',
  },

  info: '#41a9ff',
  success: '#3ee839',
  warn: '#f1cb7a',
  error: '#ff537b',

  primary: '#5343e3',
  primaryContent: '#fff',
  accent: '#aeaaff',

  git: {
    added: '#89d59b',
    modified: '#83bcf1',
    deleted: '#731d2b',
  },

  syntax: {
    keyword: '#ff9a5bff',
    variables: '#ffbfceff',
    string: '#cae790',
    func: {
      name: '#f3bf4eff',
      param: '#e7f2bdff',
    },
    const: '#f5dd87',
    macros: '#f29e74',
    punctuation: '#9899c5',
    comment: '#546e7a',
    class: '#5ed9ffff',
    numeric: '#c9adff',
    regexp: '#95e6cb',
  },
}

const scheme = createSchemeFromColors({
  type: 'dark',
  colors,
})

if (scheme.syntax.langs?.html) {
  scheme.syntax.langs.html = {
    tag: color('#74a0f1ff'),
    attributes: color('#ffaa5bff'),
    tagName: color('#55cdeeff'),
  }
}

export default scheme
