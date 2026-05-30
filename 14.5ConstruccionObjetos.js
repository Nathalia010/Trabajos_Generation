const prompt = require("prompt-sync")();
//Ejercicio 1: Libro 
console.log("\n===== EJERCICIO 1: Libro  =====");
function Libro(titulo, autor, prestado) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = true;
    this.prestar = function() {
        if (this.prestado === false) {
            this.prestado = true;
            console.log(` El libro "${this.titulo}" ha sido prestado.`);
            
        } else {
            console.log(`El libro "${this.titulo}" está disponible.`);
        }

}}
let libroUno = new Libro("Harry Potter", "J.K. Rowling");
console.log(libroUno.prestar());

//---------------------------------------------------------------
//Ejercicio 2: Lista de Compras (Array + for)
console.log("\n===== EJERCICIO 2: LISTA DE COMPRAS =====");
 
function ListaCompras() {
    this.productos = [];
 
    this.agregar = function (producto) {
        this.productos.push(producto);
    };
 
    this.mostrar = function () {
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${i + 1}. ${this.productos[i]}`);
        }
    };
}
 
const lista = new ListaCompras();
lista.agregar("Manzanas");
lista.agregar("Leche");
lista.agregar("Pan");
 
lista.mostrar();

//---------------------------------------------------------------
//Ejercicio 3: Reproductor de Música
console.log("\n===== EJERCICIO 3: Reproductor de Música =====");
function Reproductor(accion) {
    this.valorinicial = accion;

    this.play = function() {
        if (this.valorinicial === "detenido" || this.valorinicial === "pausado") {
            this.valorinicial = "reproduciendo";
            console.log("Reproduciendo música...");
            //•Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
        } else if (this.valorinicial === "reproduciendo") {
            console.log("Ya se está reproduciendo música.");
        }
    };
    this.pausar = function() {
        if (this.valorinicial === "reproduciendo") {
            this.valorinicial = "pausado";
            console.log("Música pausada.");
        } else {
            console.log("No hay música reproduciéndose.");
        }
    },
    this.detener = function() {
        if (this.valorinicial === "reproduciendo" || this.valorinicial === "pausado") {
            this.valorinicial = "detenido";
            console.log("Música detenida.");
        }
    }
};  
//"detenido"  "reproduciendo" "pausado"
let radio = new Reproductor("reproduciendo");

console.log(radio.play());


//---------------------------------------------------------------
//Ejercicio 4: Carrito de Compras
console.log("\n===== EJERCICIO 4: CARRITO DE COMPRAS =====");
function Carrito() {
    this.productos = [];
    this.total = 0;
    this.agregarProducto = function (nombre, precio) {
        this.productos.push({
            nombre,
            precio
        });
        this.total += precio;
        console.log(`Producto agregado: ${nombre} - $${precio}`);
    };
    this.calcularDescuento = function () {
        let descuento = 0;
        if (this.total > 100) {
            descuento = this.total * 0.10;
            console.log("\nDescuento aplicado: 10%");
            console.log(`Total original: $${this.total}`);
            console.log(`Total final: $${(this.total - descuento).toFixed(2)}`);
        } else if (this.total > 50 && this.total <= 100) {
            descuento = this.total * 0.05;
            console.log("\nDescuento aplicado: 5%");
            console.log(`Total original: $${this.total}`);
            console.log(`Total final: $${(this.total - descuento).toFixed(2)}`);
        } else {
            console.log("\nSin descuento.");
            console.log(`Total: $${this.total}`);
        }
    };
}
const carrito = new Carrito();
carrito.agregarProducto("Teclado", 40);
carrito.agregarProducto("Mouse", 30);
carrito.agregarProducto("Audífonos", 50);
carrito.calcularDescuento();