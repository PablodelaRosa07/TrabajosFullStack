const express = require('express')
const router = express.Router()
const Juego = require('../models/juego')
const Plataforma = require('../models/plataforma')

router.get('/', async (req, res) => {
  const totalJuegos = await Juego.countDocuments()
  const totalPlataformas = await Plataforma.countDocuments()
  const totalSwitch = await Juego.countDocuments({ plataforma: 'Switch' })
  res.render('index', {
    titulo: 'Inicio',
    totalJuegos,
    totalPlataformas,
    totalSwitch
  })
})

router.get('/contacto', (req, res) => {
  res.render('contacto', { titulo: 'Contacto' })
})

module.exports = router
