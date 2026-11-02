const fs = require('fs')
const path = require('path')

const carpeta = process.argv[2] || __dirname

let entradas
try {
  entradas = fs.readdirSync(carpeta, { withFileTypes: true })
} catch (err) {
  console.error('Error:', err.message)
  process.exit(1)
}

const cuenta = {}
entradas.forEach((entrada) => {
  if (!entrada.isFile()) return 
  const ext = path.extname(entrada.name) || '(sin extensión)'
  cuenta[ext] = (cuenta[ext] || 0) + 1
})

console.table(cuenta)
