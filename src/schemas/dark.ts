import { type ColorScheme } from 'vs-theme-builder'

// #23262e, #242936, #292d3e, #282a3a, #282c34, #1a1b26
// #1b1e2b, #1e1f2b, #232136, #25293a, #21252b, #16161e
// #d29ffc, #ffcb6b, #c792ea, #bb9af7

const colors: ColorScheme = {
  editor: {
    bg: '#242936',
    fg: '#dcdfeb',
    cursor: '#ff00e4',
    lineNumber: '#495162'
  },
  ui: {
    bg: '#1f2430',
    fg: '#6c739a',
    border: '#171b24'
  },

  primary: '#6c51e2',
  primaryContent: '#fff',
  accent: '#aeaaff',

  syntax: {
    keyword: '#9e5bff',
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
