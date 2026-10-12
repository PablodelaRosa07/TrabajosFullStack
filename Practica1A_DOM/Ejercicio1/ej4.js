var divSaludo = document.getElementById("saludo");
if (divSaludo) {
    var parrafo = document.createElement("p");
    parrafo.textContent = "¿Qué tal estás?";
    divSaludo.after(parrafo); 
}