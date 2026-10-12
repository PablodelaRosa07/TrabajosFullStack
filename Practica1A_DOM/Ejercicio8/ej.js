function anadirProducto() {
    var producto = prompt("Introduce el nombre del producto que deseas añadir:");

    if (producto !== null) {
        producto = producto.trim();

        if (producto !== "") {
            var lista = document.getElementById("lista-compra");

            var nuevoItem = document.createElement("li");

            nuevoItem.textContent = producto;

            lista.appendChild(nuevoItem);
        } else {
            alert("El nombre del producto no puede estar vacío.");
        }
    }
}