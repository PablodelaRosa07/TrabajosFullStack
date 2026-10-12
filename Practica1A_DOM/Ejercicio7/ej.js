function aumentarLetra() {
    var parrafo = document.getElementById("mi-parrafo");
    
    var estiloActual = window.getComputedStyle(parrafo).fontSize;
    
    var tamañoNumerico = parseInt(estiloActual);
    
    parrafo.style.fontSize = (tamañoNumerico + 1) + "px";
}

function disminuirLetra() {
    var parrafo = document.getElementById("mi-parrafo");
    
    var estiloActual = window.getComputedStyle(parrafo).fontSize;
    var tamañoNumerico = parseInt(estiloActual);
    
    if (tamañoNumerico > 8) {
        parrafo.style.fontSize = (tamañoNumerico - 1) + "px";
    }
}