var etiquetas = document.querySelectorAll(".etiqueta-nombre");
var btnCorrecto = document.getElementById("btn-correcto");
var btnIncorrecto = document.getElementById("btn-incorrecto");

btnCorrecto.onclick = function() {
    etiquetas.forEach(etiqueta => {
        etiqueta.style.color = "green";
    });
};

btnIncorrecto.onclick = function() {
    etiquetas.forEach(etiqueta => {
        etiqueta.style.color = "red";
    });
};