"use strict";
class Laptop {
    nombre;
    encendido;
    modeloAtributo;
    constructor(nombre, encendido, modeloAtributo) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.modeloAtributo = modeloAtributo;
    }
    get modelo() {
        return this.modeloAtributo;
    }
    set modelo(value) {
        this.modeloAtributo = value;
    }
    encender() {
        this.encendido = true;
        console.log("La laptop " + this.nombre + "(" + this.modelo + ") se ha encendido.");
    }
    apagar() {
        this.encendido = false;
        console.log("La laptop " + this.nombre + "(" + this.modelo + ") se ha apagado.");
    }
    abrirPrograma(nombrePrograma) {
        if (this.encendido) {
            console.log("Abriendo el programa " + nombrePrograma + " en la laptop " + this.nombre + "...");
        }
        else {
            console.log("No se puede abrir " + nombrePrograma + ". La laptop " + this.nombre + " está apagada.");
        }
    }
}
class Smartphone {
    nombre;
    encendido;
    marcaAtributo;
    constructor(nombre, encendido, marcaAtributo) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.marcaAtributo = marcaAtributo;
    }
    get marca() {
        return this.marcaAtributo;
    }
    set marca(value) {
        this.marcaAtributo = value;
    }
    encender() {
        this.encendido = true;
        console.log("El smartphone " + this.nombre + "(" + this.marca + ") se ha encendido.");
    }
    apagar() {
        this.encendido = false;
        console.log("El smartphone " + this.nombre + "(" + this.marca + ") se ha apagado.");
    }
    llamar(numero) {
        if (this.encendido) {
            console.log("Llamando al número " + numero + " desde el smartphone" + this.nombre);
        }
        else {
            console.log("No se puede realizar la llamada. El smartphone " + this.nombre + " está apagado.");
        }
    }
}
const miLaptop = new Laptop("IdeaPad", false, "Pro 5");
const miSmartphone = new Smartphone("Galaxy", false, "Samsung");
console.log("PRUEBAS DE LAPTOP");
miLaptop.abrirPrograma("IntelliJ IDEA");
miLaptop.encender();
miLaptop.abrirPrograma("IntelliJ IDEA");
miLaptop.apagar();
console.log("PRUEBAS DE SMARTPHONE");
miSmartphone.encender();
miSmartphone.llamar("600123456");
miSmartphone.apagar();
miSmartphone.llamar("600123456");
