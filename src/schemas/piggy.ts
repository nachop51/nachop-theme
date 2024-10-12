import { type ColorScheme } from 'vs-theme-builder'

const colors: ColorScheme = {
  editor: {
    bg: '#30282c',
    fg: '#ddc8eb',
    cursor: '#ffe0ff'
  },
  ui: {
    bg: '#222230',
    fg: '#866c9a',
    border: '#241723'
  },

  primary: '#e263b9',
  primaryContent: '#fff',
  accent: '#ebaaff',

  syntax: {
    keyword: '#b034e2',
    variables: '#ee64ad',
    string: '#e98ed0',
    func: {
      name: '#bd79ee',
      param: '#e0bdf2'
    },
    const: '#f0377b',
    punctuation: '#b298c5',
    comment: '#7d607f',
    class: '#e6d81d',
    numeric: '#c9adff',
    regexp: '#e695da'
  }
}

export default colors
