import { Usuario, UsuarioVIP } from "./usuario.js";
import { Producto, ProductoDigital } from "./producto.js";
import { calcularTotalCarrito } from "./utilidades.js";


// USUARIOS-----------------------------------

const cliente = new Usuario(
  "Luis Eduardo",
  "luis@email.com",
  "cliente"
);

const admin = new Usuario(
  "patricia fernandez",
  "paty@email.com",
  "admin"
);

const vip = new UsuarioVIP(
  "Carlos Pérez",
  "carlos@email.com",
  "Gold"
);


// PRODUCTOS -----------------------------------
console.log("----- PRODUCTOS -----");
const producto1 = new Producto(
  "Mouse Gamer",
  120000,
  "Tecnología"
);

const producto2 = new Producto(
  "Cuaderno Premium",
  25000,
  "Papelería"
);

const producto3 = new ProductoDigital(
  "Curso JavaScript",
  90000,
  "de por vida"
);

const producto4 = new ProductoDigital(
  "Suscripción Diseño UI",
  45000,
  "mensual"
);
console.log(producto1.resumen());

console.log("-----desactivación de usuario-----");
admin.desactivar();

// DESCUENTO-------------------------------
console.log("----- DESCUENTO -----");
const precioConDescuento =
  producto1.aplicarDescuento(20);

console.log(
  `Precio con 20% descuento de ${producto1.nombre}: $${precioConDescuento}`
);


// TARJETAS PRODUCTOS------------------------------

console.log(producto1.tarjeta());
console.log(producto2.tarjeta());
console.log(producto3.tarjeta());
console.log(producto4.tarjeta());


// RESUMEN USUARIOS-------------------------------
console.log("----- RESUMEN USUARIOS -----");
console.log(cliente.resumen());
console.log(admin.resumen());
console.log(vip.resumen());


// TOTAL CARRITO-------------------------------
console.log("----- TOTAL CARRITO -----");
const totalCarrito = calcularTotalCarrito([
  producto1,
  producto2,
  producto3
]);

console.log(
  `Total carrito: $${totalCarrito.toFixed(2)}`
);