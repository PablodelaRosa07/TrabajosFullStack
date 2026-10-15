class Almacen {
    private elementos: any[] = [];

    public agregarElemento(elemento: any): void {
        this.elementos.push(elemento);
    }

    public obtenerElemento(indice: number): any {
        if (indice >= 0 && indice < this.elementos.length) {
            return this.elementos[indice];
        }
        console.log(`Índice ${indice} fuera de rango.`);
        return undefined;
    }

    public listarElementos(): void {
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