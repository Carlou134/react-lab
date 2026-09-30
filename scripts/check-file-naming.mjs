import { readdirSync } from 'node:fs'
import { posix, sep } from 'node:path'

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/
const EXERCISE_DIR = /^(\d{2})-[a-z0-9]+(-[a-z0-9]+)*$/
const PASCAL = /^[A-Z][A-Za-z0-9]*$/
const CAMEL = /^[a-z][A-Za-z0-9]*$/
const HOOK_OR_HOC = /^(use|with)[A-Z][A-Za-z0-9]*$/
const ALLOWED = new Set(['src/main.tsx', 'src/App.tsx', 'src/index.css', 'src/vite-env.d.ts'])

const toPosix = (path) => path.split(sep).join('/')

function checkFile(file) {
  if (ALLOWED.has(file) || posix.basename(file) === 'README.md') return null

  const dirs = posix.dirname(file).split('/').slice(1) // sin "src"
  for (const [i, dir] of dirs.entries()) {
    const isExerciseDir = i === 1 && dirs[0] === 'exercises'
    if (!(isExerciseDir ? EXERCISE_DIR : KEBAB).test(dir)) {
      return `la carpeta "${dir}" no cumple la convención`
    }
  }

  const [stem, ...rest] = posix.basename(file).split('.')
  const ext = rest.join('.') // "tsx", "test.ts", "css"...
  const exerciseNumber = dirs[0] === 'exercises' && EXERCISE_DIR.exec(dirs[1] ?? '')?.[1]

  if (exerciseNumber && stem.includes('Exercise')) {
    const expected = `Exercise${exerciseNumber}`
    return stem === expected && ext === 'tsx' ? null : `debería llamarse ${expected}.tsx`
  }
  if (ext === 'tsx' || ext === 'test.tsx') {
    return PASCAL.test(stem) || HOOK_OR_HOC.test(stem) ? null : 'un .tsx va en PascalCase (o useX/withX)'
  }
  if (ext === 'ts' || ext === 'test.ts') {
    return CAMEL.test(stem) ? null : 'un .ts va en camelCase'
  }
  return KEBAB.test(stem) ? null : 'este archivo va en kebab-case'
}

const args = process.argv.slice(2)
const files = (
  args.length > 0
    ? args
    : readdirSync('src', { recursive: true, withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => `${entry.parentPath}/${entry.name}`)
)
  .map(toPosix)
  .filter((file) => file.startsWith('src/'))

const errors = files.map((file) => [file, checkFile(file)]).filter(([, error]) => error)

for (const [file, error] of errors) console.error(`✖ ${file}: ${error}`)
process.exit(errors.length > 0 ? 1 : 0)
