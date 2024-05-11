import nachopColors from './nachop.js'

/**
 *
 * @param {string} schema Whether the schema is light or dark
 * @param {boolean} isBordered Whether the schema is bordered or not
 * @returns
 */
export default function template (schema, isBordered) {
  const scheme = nachopColors[schema]

  return {
    name: `Nachop ${schema}${isBordered ? ' Bordered' : ''}`,
    type: schema,
    semanticHighlighting: true,
    semanticTokenColors: {
      'parameter.label': scheme.editor.fg.hex()
    },
    colors: {
      'editor.background': scheme.editor.bg.hex(),
      'editor.foreground': scheme.editor.fg.hex(),
      'selection.background': scheme.editor.selection.active.hex()
    },
    tokenColors: []
  }
}

console.log(template('dark', false))
