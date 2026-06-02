//3.3 Reto adicional
// Agreguen una funcion calcularTotalCarrito(productos) en un archivo nuevo utilidades.js.
function calcularTotalCarrito(productos) {
  return productos.reduce(
    (total, producto) => total + producto.calcularTotal(),
    0
  );
}

export { calcularTotalCarrito };