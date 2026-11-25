const express = require('express')
const router = express.Router()
const Plataforma = require('../models/plataforma')

router.get('/', async (req, res) => {
  const arrayPlataformas = await Plataforma.find().sort({ nombre: 1 })
  res.render('plataformas', { titulo: 'Plataformas', arrayPlataformas })
})

module.exports = router
