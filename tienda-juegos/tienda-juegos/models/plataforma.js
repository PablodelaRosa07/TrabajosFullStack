const mongoose = require('mongoose')

const plataformaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fabricante: { type: String, required: true },
  anio: Number
})

const Plataforma = mongoose.model('Plataforma', plataformaSchema, 'plataformas')

module.exports = Plataformas
