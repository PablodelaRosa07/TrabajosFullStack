const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next) => {
  const hora = new Date().toLocaleTimeString()
  console.log(`${hora} ${req.method} ${req.url}`)
  next()
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/horario', (req, res) => {
  res.sendFile(__dirname + '/views/horario.html')
})

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html')
})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})
