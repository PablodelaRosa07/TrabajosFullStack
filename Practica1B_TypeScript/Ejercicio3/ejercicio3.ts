// Definición de la clase Employee
class Empleado {
    constructor(
        private nombreAtributo: string,
        private apellidoAtributo: string,
        private edadAtributo: number,
        private fechaInicioAtributo: string,
        private fechaFinAtributo: string | null,
        private profesionAtributo: string
    ) {}

    get nombre(): string {
        return this.nombreAtributo;
    }
    set nombre(value: string) {
        this.nombreAtributo = value;
    }

    get apellido(): string {
        return this.apellidoAtributo;
    }
    set apellido(value: string) {
        this.apellidoAtributo = value;
    }

    get edad(): number {
        return this.edadAtributo;
    }
    set edad(value: number) {
        this.edadAtributo = value;
    }

    get fechaInicio(): string {
        return this.fechaInicioAtributo;
    }
    set fechaInicio(value: string) {
        this.fechaInicioAtributo = value;
    }

    get fechaFin(): string | null {
        return this.fechaFinAtributo;
    }
    set fechaFin(value: string | null) {
        this.fechaFinAtributo = value;
    }

    get profesion(): string {
        return this.profesionAtributo;
    }
    set profesion(value: string) {
        this.profesionAtributo = value;
    }
}

const empleadoActual = new Empleado(
    "Carlos",
    "Gómez",
    28,
    "2023-01-15",
    null,
    "Desarrollador Full Stack"
);

const exEmpleado = new Empleado(
    "Laura",
    "Martínez",
    34,
    "2021-06-01",
    "2024-12-31",
    "Analista de Sistemas"
);

console.log("Información de Empleados");
console.log("Empleado 1 (Activo) -> Nombre: " +empleadoActual.nombre+" "+empleadoActual.apellido+ ", Edad: " +empleadoActual.edad+ " años");
console.log("Empleado 2 (Ex-empleado) -> Nombre: " +empleadoActual.nombre+" "+exEmpleado.apellido+ ", Edad: " +exEmpleado.edad+ " años");