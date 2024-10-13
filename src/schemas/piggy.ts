import { type ColorScheme } from 'vs-theme-builder'

const colors: ColorScheme = {
  editor: {
    bg: '#242430',
    fg: '#ddc8eb',
    cursor: '#ffe0ff'
  },
  ui: {
    bg: '#222230',
    fg: '#866c9a',
    border: '#241723'
  },

  error: '#ff326a',
  warn: '#ff7e63',
  info: '#abf8fc',
  success: '#c6e797',

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
    class: '#e6a51d',
    numeric: '#c9adff',
    regexp: '#e695da',

    brackets: {
      1: '#e263b9',
      2: '#ebaaff',
      3: '#f0c3ff'
    }
  }
}

export default colors
