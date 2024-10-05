import { type ColorScheme } from 'vs-theme-builder'

const colors: ColorScheme = {
  editor: {
    bg: '#F8F4FA',
    fg: '#5c6166',
    cursor: '#FF00E4',
    lineNumber: '#495162'
  },
  ui: {
    bg: '#F5F3F5',
    fg: '#8a9199',
    border: '#ECDEFF',
    shadow: '#BB99FF40'
  },

  primary: '#aeaaff',
  primaryContent: '#fff',
  accent: '#6C51E2',

  syntax: {
    keyword: '#ad72f3',
    variables: '#ee6584',
    string: '#46C42D',
    func: {
      name: '#42A0ED',
      param: '#DD9FFC'
    },

    const: '#F0B838',
    macros: '#f29e74',
    punctuation: '#9899c5',
    comment: '#546E7A',
    class: '#FFA861',
    numeric: '#BB99FF',
    regexp: '#58DBAF'

  }

}

export default colors
