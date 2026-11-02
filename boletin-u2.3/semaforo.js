const EventEmitter = require('events')

const COLORES = ['verde', 'ámbar', 'rojo']

class Semaforo extends EventEmitter {
  constructor(ms) {
    super() 
    this.indice = 0 
    this.color = COLORES[this.indice]
    this.intervalo = setInterval(() => {
      this.indice = (this.indice + 1) % COLORES.length
      this.color = COLORES[this.indice]
      this.emit('cambio', this.color)
      if (this.color === 'rojo') this.emit('rojo')
    }, ms)
  }

  parar() {
    clearInterval(this.intervalo)
    this.emit('parado')
  }
}

module.exports = Semaforo
