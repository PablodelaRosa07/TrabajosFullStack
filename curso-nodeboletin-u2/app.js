const fs = require('fs/promises')
const pc = require('picocolors')
const { media, aprobados, mejor } = require('./notas')

async function ejecutarApp() {
  try {
    const contenido = await fs.readFile('notas.json', 'utf8')
    const alumnos = JSON.parse(contenido)

    console.log(pc.bold('Listado de Alumnos'))
    alumnos.forEach(alumno => {
      const texto = `${alumno.nombre}: ${alumno.nota}`
      if (alumno.nota >= 5) {
        console.log(pc.green(texto))
      } else {
        console.log(pc.red(texto))
      }
    })

    console.log(pc.bold('Resumen'))
    console.log(`Nota media: ${media(alumnos).toFixed(2)}`)
    console.log(`Número de aprobados: ${aprobados(alumnos).length}`)
    const topAlumno = mejor(alumnos)
    console.log(`Mejor alumno: ${topAlumno ? topAlumno.nombre : 'Ninguno'} (${topAlumno?.nota})`)

  } catch (err) {
    console.error(pc.red('Error al procesar las notas:'), err.message)
  }
}

ejecutarApp()