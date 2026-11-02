const [textoSegundos, ...palabras] = process.argv.slice(2)
const mensaje = palabras.join(' ') || '¡Tiempo!'
const total = Number(textoSegundos)

if (!Number.isInteger(total) || total <= 0) {
  console.error('Uso: node temporizador.js <segundos> [mensaje]')
  process.exit(1)
}

let quedan = total
console.time('Duración total')

const intervalo = setInterval(() => {
  quedan--
  console.log(`Quedan ${quedan} s`)
  if (quedan === 0) {
    clearInterval(intervalo) 
    console.log(mensaje)
    console.timeEnd('Duración total')
  }
}, 1000)

setTimeout(() => {
  console.log('¡Ya vas por la mitad!')
}, (total * 1000) / 2)
