// Array de objetos proporcionado
const productos = [
    { id: 1, nombre: 'Patata', precio: 1, imagen: 'patata.jpg' },
    { id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla.jpg' },
    { id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin.jpg' },
    { id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas.jpg' }
];

window.onload = function() {
    const contenedor = document.getElementById("contenedor-productos");

    productos.forEach(producto => {
        // Creamos la tarjeta contenedora para cada producto
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-producto";

        const img = document.createElement("img");
        img.src = "img/" + producto.imagen;
        img.alt = producto.nombre;
        tarjeta.appendChild(img);

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;
        tarjeta.appendChild(nombre);

        const precio = document.createElement("p");
        precio.textContent = producto.precio.toFixed(2) + " €";
        tarjeta.appendChild(precio);

        const botonDisponibilidad = document.createElement("button");
        botonDisponibilidad.textContent = "Disponible";
        botonDisponibilidad.className = "btn-disponibilidad disabled";

        botonDisponibilidad.onclick = function() {
            if (this.classList.contains("disabled")) {
                this.classList.remove("disabled");
                this.classList.add("enabled");
            } else {
                this.classList.remove("enabled");
                this.classList.add("disabled");
            }
        };

        tarjeta.appendChild(botonDisponibilidad);

        contenedor.appendChild(tarjeta);
    });
};