"use strict";
class Animal {
    nombreAtributo;
    edadAtributo;
    tipoAtributo;
    constructor(nombreAtributo, edadAtributo, tipoAtributo) {
        this.nombreAtributo = nombreAtributo;
        this.edadAtributo = edadAtributo;
        this.tipoAtributo = tipoAtributo;
    }
    get nombre() {
        return this.nombreAtributo;
    }
    set nombre(value) {
        this.nombreAtributo = value;
    }
    get edad() {
        return this.edadAtributo;
    }
    set edad(value) {
        this.edadAtributo = value;
    }
    get tipo() {
        return this.tipoAtributo;
    }
    set tipo(value) {
        this.tipoAtributo = value;
    }
    hacerRuido() {
        console.log(this.nombre + " emite un sonido genérico.");
    }
}
class Perro extends Animal {
    razaAtributo;
    constructor(nombre, edad, tipo, razaAtributo) {
        super(nombre, edad, tipo);
        this.razaAtributo = razaAtributo;
    }
    get raza() {
        return this.razaAtributo;
    }
    set raza(value) {
        this.razaAtributo = value;
    }
    hacerRuido() {
        console.log(this.nombre + " dice: ¡Guau, guau!");
    }
    traerPelota() {
        console.log(this.nombre + " está corriendo felizmente tras la pelota.");
    }
}
class Pájaro extends Animal {
    colorPlumajeAtributo;
    constructor(nombre, edad, tipo, colorPlumajeAtributo) {
        super(nombre, edad, tipo);
        this.colorPlumajeAtributo = colorPlumajeAtributo;
    }
    get colorPlumaje() {
        return this.colorPlumajeAtributo;
    }
    set colorPlumaje(value) {
        this.colorPlumajeAtributo = value;
    }
    hacerRuido() {
        console.log(this.nombre + " dice: ¡Pío, pío!");
    }
    volar() {
        console.log(this.nombre + " ha extendido sus alas y está volando.");
    }
}
const miPerro = new Perro("Firulais", 4, "Mamífero", "Sánchez");
const miPajaro = new Pájaro("Piolín", 1, "Ave", "Amarillo");
console.log("PERRO");
console.log("Nombre: " + miPerro.nombre + " | Edad: " + miPerro.edad + " años | Tipo: " + miPerro.tipo + " | Raza: " + miPerro.raza);
miPerro.hacerRuido();
miPerro.traerPelota();
console.log("PÁJARO");
console.log("Nombre: " + miPajaro.nombre + " | Edad: " + miPajaro.edad + " años | Tipo: " + miPajaro.tipo + " | Raza: " + miPajaro.colorPlumaje);
miPajaro.hacerRuido();
miPajaro.volar();
