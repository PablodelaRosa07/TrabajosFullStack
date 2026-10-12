function anadirProducto() {
    let producto = prompt("Introduce el nombre del producto que deseas añadir:");

    if (producto !== null) {
        producto = producto.trim();

        if (producto !== "") {
            var lista = document.getElementById("lista-compra");

            var nuevoItem = document.createElement("li");

            var textoProducto = document.createElement("span");
            textoProducto.textContent = producto + " ";
            nuevoItem.appendChild(textoProducto);

            var btnSi = document.createElement("button");
            btnSi.textContent = "SÍ";
            btnSi.onclick = function() {
                textoProducto.classList.remove("no-comprado");
                textoProducto.classList.add("comprado");
            };

            var btnNo = document.createElement("button");
            btnNo.textContent = "NO";
            btnNo.onclick = function() {
                textoProducto.classList.remove("comprado");
                textoProducto.classList.add("no-comprado");
            };

            nuevoItem.appendChild(btnSi);
            nuevoItem.appendChild(btnNo);

            lista.appendChild(nuevoItem);
        } else {
            alert("El nombre del producto no puede estar vacío.");
        }
    }
}