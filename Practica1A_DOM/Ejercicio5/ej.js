window.onload = function() {
    var ciudades_gratis = ["Sevilla", "Madrid", "Valencia", "Barcelona"];
    var ciudades_gastos = ["Cantabria", "Pontevedra", "Toledo", "Segovia"];

    var inputCiudad = document.getElementById("ciudad");
    var inputGastos = document.getElementById("gastos");
    var inputFecha = document.getElementById("fecha");
    var divFecha = document.getElementById("div-fecha");

    var ciudadUsuario = prompt("Introduce la ciudad de destino:");

    if (ciudadUsuario !== null) {
        ciudadUsuario = ciudadUsuario.trim();

        var esDeGastos = ciudades_gastos.some(c => c.toLowerCase() === ciudadUsuario.toLowerCase());
        
        var esGratis = ciudades_gratis.some(c => c.toLowerCase() === ciudadUsuario.toLowerCase());

        inputCiudad.value = ciudadUsuario;

        if (esDeGastos) {
            var importeGastos = prompt("Introduce el importe de los gastos de envío:");
            
            if (importeGastos !== null && importeGastos !== "") {
                inputGastos.value = importeGastos + " €";
            } else {
                inputGastos.value = "No especificado";
            }

            var hoy = new Date();
            inputFecha.value = hoy.toLocaleDateString();

        } else if (esGratis) {
            inputGastos.value = "Gastos gratuitos";

            var hoy = new Date();
            inputFecha.value = hoy.toLocaleDateString();

        } else {
            inputGastos.value = "No se pueden realizar envíos";

            if (divFecha) {
                divFecha.style.display = "none";
            }
        }
    }
};