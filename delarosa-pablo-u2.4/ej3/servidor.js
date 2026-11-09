const http = require('http')
const fs = require('fs')
const path = require('path')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }
const JSON_TIPO = { 'Content-Type': 'application/json; charset=utf-8' }

const MAX_MENSAJE = 200
const rutaFormulario = path.join(__dirname, 'recursos', 'formulario.html')

const firmas = []

function escaparHTML(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function pagina(titulo, cuerpo) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>${titulo}</title></head>
<body>${cuerpo}</body>
</html>`
}

function responder(res, codigo, cabeceras, cuerpo) {
  res.writeHead(codigo, cabeceras)
  res.end(cuerpo)
}

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url)

  const url = new URL(req.url, 'http://localhost')

  if (req.method === 'GET' && url.pathname === '/') {
    return fs.readFile(rutaFormulario, (err, datos) => {
      if (err) {
        return responder(res, 500, HTML, pagina('Error 500', '<h1>Error 500</h1><p>No se pudo leer el formulario.</p>'))
      }
      responder(res, 200, HTML, datos)
    })
  }

  if (req.method === 'GET' && url.pathname === '/firmas') {
    const nombre = url.searchParams.get('nombre')
    const resultado = nombre
      ? firmas.filter((f) => f.nombre === nombre)
      : firmas
    return responder(res, 200, JSON_TIPO, JSON.stringify(resultado, null, 2))
  }

  if (req.method === 'POST' && url.pathname === '/firmar') {
    let cuerpo = '' 
    req.on('data', (chunk) => {
      cuerpo += chunk
    })
    req.on('end', () => {
      const datos = Object.fromEntries(new URLSearchParams(cuerpo))
      const nombre = (datos.nombre || '').trim()
      const mensaje = (datos.mensaje || '').trim()

      let error = null
      if (!nombre) error = 'El nombre es obligatorio.'
      else if (!mensaje) error = 'El mensaje es obligatorio.'
      else if (mensaje.length > MAX_MENSAJE) {
        error = `El mensaje no puede superar los ${MAX_MENSAJE} caracteres (has escrito ${mensaje.length}).`
      }

      if (error) {
        return responder(
          res,
          400,
          HTML,
          pagina(
            'Error 400',
            `<h1>Error 400</h1><p>${escaparHTML(error)}</p><p><a href="/">Volver</a></p>`
          )
        )
      }

      firmas.push({ nombre, mensaje, fecha: new Date().toISOString() })
      responder(
        res,
        201,
        HTML,
        pagina(
          'Gracias',
          `<h1>Gracias por firmar, ${escaparHTML(nombre)}</h1><p><a href="/">Volver</a></p>`
        )
      )
    })
    return
  }

  // Cualquier otra cosa -> 404
  responder(
    res,
    404,
    HTML,
    pagina('Error 404', '<h1>Error 404</h1><p>La ruta no existe.</p><p><a href="/">Volver</a></p>')
  )
})

servidor.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
