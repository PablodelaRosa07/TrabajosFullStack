function mostrar() {
    var parrafosOcultos = document.querySelectorAll(".parrafo-js.oculto");
    var parrafosVisibles = document.querySelectorAll(".parrafo-js:not(.oculto)");
    var spanBoton = document.getElementById("mostrar-mas");

    if (parrafosOcultos.length > 0) {
        parrafosOcultos.forEach(parrafo => {
            parrafo.classList.remove("oculto");
        });
        spanBoton.textContent = "Mostrar menos…";
    } else {
        var todosLosParrafos = document.querySelectorAll(".parrafo-js");
        for (let i = 1; i < todosLosParrafos.length; i++) {
            todosLosParrafos[i].classList.add("oculto");
        }
        spanBoton.textContent = "Mostrar más…";
    }
}