const fs = require('fs/promises')

let archivoEntrada = ''

fs.readFile('config.json', 'utf8')
  .then(datos => {
    const config = JSON.parse(datos)
    archivoEntrada = config.entrada
    return Promise.all([config, fs.readFile(config.entrada, 'utf8')])
  })
  .then(([config, texto]) => {
    const lineas = texto.trim().split('').length
    const informe = `Fichero: ${config.entrada}\nLíneas: ${lineas}\n`
    return fs.writeFile(config.salida, informe).then(() => config.salida)
  })
  .then(salida => {
    console.log('Informe creado en', salida)
  })
  .catch(err => {
    console.error('Error:', err.message)
  })