interface DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    encender(): void;
    apagar(): void;
}


class Laptop implements DispositivoElectronico {
    constructor(
        public nombre: string,
        public encendido: boolean,
        private modeloAtributo: string 
    ) {}

    get modelo(): string {
        return this.modeloAtributo;
    }
    set modelo(value: string) {
        this.modeloAtributo = value;
    }

    public encender(): void {
        this.encendido = true;
        console.log("La laptop " +this.nombre+ "(" +this.modelo+ ") se ha encendido.");
    }

    public apagar(): void {
        this.encendido = false;
        console.log("La laptop " +this.nombre+ "(" +this.modelo+ ") se ha apagado.");
    }

    public abrirPrograma(nombrePrograma: string): void {
        if (this.encendido) {
            console.log("Abriendo el programa " +nombrePrograma+ " en la laptop " +this.nombre+ "...");
        } else {
            console.log("No se puede abrir " +nombrePrograma+ ". La laptop " +this.nombre+ " está apagada.");
        }
    }
}

class Smartphone implements DispositivoElectronico {
    constructor(
        public nombre: string,
        public encendido: boolean,
        private marcaAtributo: string 
    ) {}

    get marca(): string {
        return this.marcaAtributo;
    }
    set marca(value: string) {
        this.marcaAtributo = value;
    }

    public encender(): void {
        this.encendido = true;
        console.log("El smartphone " +this.nombre+ "(" +this.marca+ ") se ha encendido.");    
    }

    public apagar(): void {
        this.encendido = false;
        console.log("El smartphone " +this.nombre+ "(" +this.marca+ ") se ha apagado.");
    }

    public llamar(numero: string): void {
        if (this.encendido) {
            console.log("Llamando al número "+numero+ " desde el smartphone" +this.nombre);
        } else {
            console.log("No se puede realizar la llamada. El smartphone " +this.nombre+ " está apagado.");
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
