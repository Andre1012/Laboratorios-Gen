class Producto{
    constructor(nombre, precio, disponible){
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }
    mostrarInfo(){
        return this.nombre + " cuesta $" + this.precio + " disponibilidad: " + this.disponible
    }
    cambiarDisponibilidad(){
        this.disponible = !this.disponible
    }
}

class Maquillaje extends Producto{
    constructor(nombre, precio, disponible, tono){
        super(nombre, precio, disponible)
        this.tono = tono
    }

    mostrarInfo() {
        return super.mostrarInfo() + ", tono: " + this.tono
    }
}

// Creando productos
const producto1 = new Producto("Labial", 75, true)
const producto2 = new Producto("Rimel", 40, false)
const producto3 = new Producto("Base", 300, true)
const producto4 = new Producto("Mascara", 200, false)


// Cambiando diponibilidad producto2
producto2.cambiarDisponibilidad()

console.log(producto1.mostrarInfo())
console.log(producto2.mostrarInfo())
console.log(producto3.mostrarInfo())
console.log(producto4.mostrarInfo())

// Creando instancia de Maquillaje
const maquillaje1 = new Maquillaje("Rubor", 100, false, "rojos")
console.log(maquillaje1.mostrarInfo())
