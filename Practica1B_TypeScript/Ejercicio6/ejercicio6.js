"use strict";
class Almacen {
    elementos = [];
    agregarElemento(elemento) {
        this.elementos.push(elemento);
    }
    obtenerElemento(indice) {
        if (indice >= 0 && indice < this.elementos.length) {
            return this.elementos[indice];
        }
        console.log(`Índice ${indice} fuera de rango.`);
        return undefined;
    }
    listarElementos() {
        console.log("Elementos en el almacén:", this.elementos);
    }
}
console.log("PRUEBAS DEL ALMACÉN");
const miAlmacen = new Almacen();
miAlmacen.agregarElemento(42);
miAlmacen.agregarElemento("Desarrollo de Aplicaciones");
miAlmacen.agregarElemento({ producto: "Teclado", precio: 30 });
miAlmacen.listarElementos();
console.log("Elemento en la posición 1: ", miAlmacen.obtenerElemento(1));
