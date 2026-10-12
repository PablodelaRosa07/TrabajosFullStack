window.onload = function() {
    // Solicitamos los datos mediante prompts
    var nuevaCiudad = prompt("Introduce la ciudad:", "Sevilla");
    var nuevosGastos = prompt("Introduce los gastos de envío:", "3€");

    if (nuevaCiudad !== null) {
        var inputCiudad = document.getElementById("ciudad");
        if (inputCiudad) inputCiudad.value = nuevaCiudad;
    }

    if (nuevosGastos !== null) {
        var inputGastos = document.getElementById("gastos");
        if (inputGastos) inputGastos.value = nuevosGastos;
    }

    var hoy = new Date();
    var fechaFormateada = hoy.toLocaleDateString();

    var inputFecha = document.getElementById("fecha");
    if (inputFecha) {
        inputFecha.value = fechaFormateada;
    }
};