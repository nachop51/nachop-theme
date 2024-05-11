import fs from 'node:fs'
import path from 'node:path'
import template from './template.js'

const schemas = ['light', 'dark']

const filePath = (schema, isBordered) => {
  return path.join(process.cwd(), 'themes', `nachop-${schema}${isBordered ? '-bordered' : ''}.json`)
}

schemas.forEach((schema) => {
  const bordered = JSON.stringify(template(schema, true), null, '\t')
  const nonBordered = JSON.stringify(template(schema, false), null, '\t')

  fs.writeFileSync(filePath(schema, true), bordered)
  fs.writeFileSync(filePath(schema, false), nonBordered)
})
