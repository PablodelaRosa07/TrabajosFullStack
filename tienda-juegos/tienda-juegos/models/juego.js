const mongoose = require('mongoose')

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  plataforma: { type: String, required: true },
  precio: { type: Number, required: true }
})

const Juego = mongoose.model('Juego', juegoSchema, 'juegos')

module.exports = Juego
