"use strict";
function contarPalabras(texto) {
    let contador = 0;
    let dentroDePalabra = false;
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (caracter !== " ") {
            if (!dentroDePalabra) {
                contador++;
                dentroDePalabra = true;
            }
        }
        else {
            dentroDePalabra = false;
        }
    }
    return contador;
}
console.log("Pruebas de contarPalabras");
console.log(contarPalabras("Hola mundo TypeScript"));
console.log(contarPalabras("Desarrollo de Aplicaciones Multiplataforma"));
console.log(contarPalabras("Prueba"));
console.log(contarPalabras("   "));
function getAvenger(nombre, poder, arma = "arco") {
    if (poder) {
        return "El Vengador es ${nombre}, su poder es '${poder}' y utiliza un/a ${arma}.";
    }
    else {
        return "El Vengador es ${nombre} y utiliza un/a ${arma}.";
    }
}
console.log("Pruebas de getAvenger");
console.log(getAvenger("Ojo de Halcón", "Tiro con arco perfecto"));
console.log(getAvenger("Viuda Negra"));
console.log(getAvenger("Thor", "Control del trueno", "martillo Mjolnir"));
console.log(getAvenger("Capitán América", undefined, "escudo de vibranium"));
