// Ejercicio 6: servidor web con varias rutas, solo con el core
const http = require('http')
const os = require('os')
const crypto = require('crypto')

const puerto = process.env.PORT || 3000

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url)

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(
      '<h1>Servidor de 2º DAM</h1>' +
        '<p>Prueba las rutas /info y /dado</p>'
    )
  } else if (req.url === '/info') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        sistema: os.type(),
        cpus: os.cpus().length,
        node: process.version,
      })
    )
  } else if (req.url === '/dado') {
    const dado = crypto.randomInt(1, 7) // de 1 a 6
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(`<h1>Has sacado un ${dado}</h1>`)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end('404 - Página no encontrada')
  }
})

servidor.listen(puerto, () => {
  console.log(`Servidor en http://localhost:${puerto}`)
})
