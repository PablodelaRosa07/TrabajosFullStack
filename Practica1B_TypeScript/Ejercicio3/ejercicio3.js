"use strict";
// Definición de la clase Employee
class Empleado {
    nombreAtributo;
    apellidoAtributo;
    edadAtributo;
    fechaInicioAtributo;
    fechaFinAtributo;
    profesionAtributo;
    constructor(nombreAtributo, apellidoAtributo, edadAtributo, fechaInicioAtributo, fechaFinAtributo, profesionAtributo) {
        this.nombreAtributo = nombreAtributo;
        this.apellidoAtributo = apellidoAtributo;
        this.edadAtributo = edadAtributo;
        this.fechaInicioAtributo = fechaInicioAtributo;
        this.fechaFinAtributo = fechaFinAtributo;
        this.profesionAtributo = profesionAtributo;
    }
    get nombre() {
        return this.nombreAtributo;
    }
    set nombre(value) {
        this.nombreAtributo = value;
    }
    get apellido() {
        return this.apellidoAtributo;
    }
    set apellido(value) {
        this.apellidoAtributo = value;
    }
    get edad() {
        return this.edadAtributo;
    }
    set edad(value) {
        this.edadAtributo = value;
    }
    get fechaInicio() {
        return this.fechaInicioAtributo;
    }
    set fechaInicio(value) {
        this.fechaInicioAtributo = value;
    }
    get fechaFin() {
        return this.fechaFinAtributo;
    }
    set fechaFin(value) {
        this.fechaFinAtributo = value;
    }
    get profesion() {
        return this.profesionAtributo;
    }
    set profesion(value) {
        this.profesionAtributo = value;
    }
}
const empleadoActual = new Empleado("Carlos", "Gómez", 28, "2023-01-15", null, "Desarrollador Full Stack");
const exEmpleado = new Empleado("Laura", "Martínez", 34, "2021-06-01", "2024-12-31", "Analista de Sistemas");
console.log("Información de Empleados");
console.log("Empleado 1 (Activo) -> Nombre: " + empleadoActual.nombre + " " + empleadoActual.apellido + ", Edad: " + empleadoActual.edad + " años");
console.log("Empleado 2 (Ex-empleado) -> Nombre: " + empleadoActual.nombre + " " + exEmpleado.apellido + ", Edad: " + exEmpleado.edad + " años");
