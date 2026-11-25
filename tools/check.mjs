// Fails if a known server property has no entry in the wiki, or a page is missing from the sidebar.
import { readFileSync, readdirSync } from 'node:fs'

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8')
const keys = read('tools/property-keys.txt').split(/\r?\n/).filter((l) => l && !l.startsWith('#'))
const docs = read('docs/config/server-properties.md') + read('docs/config/hidden-properties.md')
const problems = keys.filter((k) => !docs.includes('`' + k + '`')).map((k) => `undocumented property: ${k}`)

const config = read('docs/.vitepress/config.mjs')
for (const dir of readdirSync(new URL('../docs/', import.meta.url), { withFileTypes: true })) {
  if (!dir.isDirectory() || dir.name.startsWith('.')) continue
  for (const file of readdirSync(new URL(`../docs/${dir.name}/`, import.meta.url))) {
    if (file.endsWith('.md') && !config.includes(`'${file.slice(0, -3)}'`)) problems.push(`not in sidebar: ${dir.name}/${file}`)
  }
}

if (problems.length) {
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log(`All ${keys.length} properties are documented and every page is in the sidebar.`)
