function media(lista) {
  if (lista.length === 0) return 0
  const suma = lista.reduce((acum, alumno) => acum + alumno.nota, 0)
  return suma / lista.length
}

function aprobados(lista) {
  return lista.filter(alumno => alumno.nota >= 5)
}

function mejor(lista) {
  if (lista.length === 0) return null
  return lista.reduce((top, alumno) => (alumno.nota > top.nota ? alumno : top))
}

module.exports = {
  media,
  aprobados,
  mejor
}