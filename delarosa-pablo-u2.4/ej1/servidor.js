const http = require('http')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }


const rutas = {
  '/': () => `
    <h1>Inicio</h1>
    <ul>
      <li><a href="/sobre-mi">Sobre mí</a></li>
      <li><a href="/aficiones">Aficiones</a></li>
      <li><a href="/hora">Hora</a></li>
    </ul>`,
  '/sobre-mi': () => `
    <h1>Sobre mí</h1>
    <p>Me llamo Nombre Apellido y estudio 2º DAM. Me gusta programar,
    el diseño de aplicaciones y aprender tecnologías nuevas como Node.js.</p>
    <p><a href="/">Volver al inicio</a></p>`,
  '/aficiones': () => `
    <h1>Aficiones</h1>
    <ul>
      <li>Videojuegos</li>
      <li>Senderismo</li>
      <li>Música</li>
    </ul>
    <p><a href="/">Volver al inicio</a></p>`,
  '/hora': () => `
    <h1>Hora</h1>
    <p>Son las ${new Date().toLocaleTimeString('es-ES')}</p>
    <p><a href="/">Volver al inicio</a></p>`,
}

function pagina(titulo, cuerpo) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${titulo}</title>
</head>
<body>${cuerpo}</body>
</html>`
}

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url)

  const generar = rutas[req.url]

  if (generar) {
    res.writeHead(200, HTML)
    res.end(pagina('Servidor Node', generar()))
  } else {
    res.writeHead(404, HTML)
    res.end(
      pagina(
        'Error 404',
        '<h1>Error 404: la ruta no existe</h1><p><a href="/">Volver al inicio</a></p>'
      )
    )
  }
})

servidor.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
