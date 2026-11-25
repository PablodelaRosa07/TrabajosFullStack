require('dotenv').config({ quiet: true }) // lee el .env (primera línea)
const express = require('express')
const mongoose = require('mongoose')
const app = express()
// En Render el puerto lo pone la plataforma
const PORT = process.env.PORT || 3000

// ---------- Base de datos ----------
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch((err) => console.error('Error BD:', err.message))

// Motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// Ficheros estáticos
app.use(express.static(__dirname + '/public'))

// Rutas: prefijo + fichero de rutas
app.use('/', require('./routes/web'))
app.use('/juegos', require('./routes/juegos'))
app.use('/plataformas', require('./routes/plataformas'))

// 404: siempre la última
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página no encontrada' })
})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})
