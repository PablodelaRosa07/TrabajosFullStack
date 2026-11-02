// Ejercicio 4: copiar un fichero en mayúsculas
const fs = require('fs')
const { stdin, stdout } = process

stdout.write('¿Qué fichero quieres copiar?: ')

stdin.once('data', (resp) => {
  const origen = resp.toString().trim()
  const destino = 'MAYUS-' + origen
  let bytes = 0

  const lectura = fs.createReadStream(origen, 'utf8')

  // Creamos la escritura solo cuando el fichero se ha abierto bien
  lectura.on('open', () => {
    const escritura = fs.createWriteStream(destino)

    lectura.on('data', (chunk) => {
      bytes += Buffer.byteLength(chunk)
      escritura.write(chunk.toUpperCase()) // cada trozo, en mayúsculas
    })

    lectura.on('end', () => escritura.end())

    escritura.on('finish', () => {
      console.log(`Creado ${destino} (${bytes} bytes)`)
      process.exit() // stdin mantiene el programa vivo
    })
  })

  lectura.on('error', (err) => {
    console.error('Error:', err.message)
    process.exit(1)
  })
})
