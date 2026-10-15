class Animal {
    constructor(
        private nombreAtributo: string,
        private edadAtributo: number,
        private tipoAtributo: string
    ) {}

    get nombre(): string {
        return this.nombreAtributo;
    }
    set nombre(value: string) {
        this.nombreAtributo = value;
    }

    get edad(): number {
        return this.edadAtributo;
    }
    set edad(value: number) {
        this.edadAtributo = value;
    }

    get tipo(): string {
        return this.tipoAtributo;
    }
    set tipo(value: string) {
        this.tipoAtributo = value;
    }

    public hacerRuido(): void {
        console.log(this.nombre+ " emite un sonido genérico.");
    }
}


class Perro extends Animal {
    constructor(
        nombre: string,
        edad: number,
        tipo: string,
        private razaAtributo: string 
    ) {
        super(nombre, edad, tipo); 
    }

    get raza(): string {
        return this.razaAtributo;
    }
    set raza(value: string) {
        this.razaAtributo = value;
    }

    public hacerRuido(): void {
        console.log(this.nombre+ " dice: ¡Guau, guau!");
    }

    public traerPelota(): void {
        console.log(this.nombre+ " está corriendo felizmente tras la pelota.");
    }
}


class Pájaro extends Animal {
    constructor(
        nombre: string,
        edad: number,
        tipo: string,
        private colorPlumajeAtributo: string 
    ) {
        super(nombre, edad, tipo);
    }

    get colorPlumaje(): string {
        return this.colorPlumajeAtributo;
    }
    set colorPlumaje(value: string) {
        this.colorPlumajeAtributo = value;
    }

    public hacerRuido(): void {
        console.log(this.nombre+" dice: ¡Pío, pío!");
    }

    public volar(): void {
        console.log(this.nombre+ " ha extendido sus alas y está volando.");
    }
}


const miPerro = new Perro("Firulais", 4, "Mamífero", "Sánchez");

const miPajaro = new Pájaro("Piolín", 1, "Ave", "Amarillo");

console.log("PERRO");
console.log("Nombre: " +miPerro.nombre+ " | Edad: " +miPerro.edad+ " años | Tipo: " +miPerro.tipo+ " | Raza: " +miPerro.raza);
miPerro.hacerRuido();
miPerro.traerPelota();


console.log("PÁJARO");
console.log("Nombre: " +miPajaro.nombre+ " | Edad: " +miPajaro.edad+ " años | Tipo: " +miPajaro.tipo+ " | Raza: " +miPajaro.colorPlumaje);
miPajaro.hacerRuido();
miPajaro.volar();