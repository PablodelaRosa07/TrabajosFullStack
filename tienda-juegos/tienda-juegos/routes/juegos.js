const express = require('express')
const router = express.Router()
const Juego = require('../models/juego')

router.get('/', async (req, res) => {
  const arrayJuegos = await Juego.find().sort({ titulo: 1 })
  res.render('juegos', { titulo: 'Juegos', arrayJuegos })
})

router.get('/baratos', async (req, res) => {
  const arrayJuegos = await Juego.find({ precio: { $lt: 30 } }).sort({ precio: 1 })
  res.render('juegos', {
    titulo: 'Juegos de menos de 30 €',
    arrayJuegos
  })
})

module.exports = router
