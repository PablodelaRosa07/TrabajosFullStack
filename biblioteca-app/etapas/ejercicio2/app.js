const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use((req, res, next) => {
  const hora = new Date().toLocaleTimeString()
  console.log(`${hora} ${req.method} ${req.url}`)
  next()
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio' })
})

app.get('/horario', (req, res) => {
  const horario = [
    { dia: 'Lunes', horas: '8:30 - 14:30' },
    { dia: 'Martes', horas: '8:30 - 14:30' },
    { dia: 'Miércoles', horas: '8:30 - 14:30' },
    { dia: 'Jueves', horas: '8:30 - 14:30 y 16:00 - 19:00' },
    { dia: 'Viernes', horas: '8:30 - 13:30' }
  ]
  res.render('horario', { titulo: 'Horario', horario })
})

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Error 404' })
})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})
