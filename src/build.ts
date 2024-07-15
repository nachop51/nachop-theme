import fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import template from './template.js'
import { type Schemas } from './nachop.js'

const schemas: Schemas[] = ['dark', 'light']

const filePath = (schema: Schemas, isBordered: boolean) => {
  return path.join(cwd(), 'themes', `nachop-${schema}${isBordered ? '-bordered' : ''}.json`)
}

schemas.forEach((schema: Schemas) => {
  const bordered = JSON.stringify(template(schema, true), null, '\t')
  const nonBordered = JSON.stringify(template(schema, false), null, '\t')

  fs.writeFileSync(filePath(schema, true), bordered)
  fs.writeFileSync(filePath(schema, false), nonBordered)
})
