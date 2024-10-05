import { type ColorScheme } from 'vs-theme-builder'

const colors: ColorScheme = {
  editor: {
    bg: '#120e05',
    fg: '#d6d2c1',
    cursor: '#d6d2c1',
    lineNumber: '#595242'
  },
  ui: {
    bg: '#1C1817',
    fg: '#9c918b',
    border: '#201c1a'
  },

  primary: '#595242',
  primaryContent: '#d6d2c1',
  accent: '#595242',

  // Misc colors
  success: '#99cc99',
  info: '#acd0fa',
  warn: '#fae6ac',
  error: '#faacac',

  syntax: {
    keyword: '#ad72f3',
    variables: '#ee6584',
    string: '#cae790',
    func: {
      name: '#79b9ee',
      param: '#e0bdf2'
    },

    const: '#f5dd87',
    macros: '#f29e74',
    punctuation: '#9899c5',
    comment: '#546e7a',
    class: '#ffcb6b',
    numeric: '#c9adff',
    regexp: '#95e6cb'
  }
}

export default colors
