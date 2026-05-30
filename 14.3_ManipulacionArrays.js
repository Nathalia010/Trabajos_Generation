const prompt = require("prompt-sync")();
//----------------------------------------------------------------------------------------
//Ejercicio 1: Calculadora de Propinas
console.log("------------------------------------------------")
console.log("Ejercicio 1")
let total = parseInt(prompt("Ingrese cuanto dinero es de la cuenta: "));
let propina = parseInt(prompt("Ingrese el propina: "));

function calcularPropina(total, propina) {
        return (total + propina);

}
console.log("El total a pagar es: " + calcularPropina(total, propina));

//----------------------------------------------------------------------------------------
//Ejercicio 2: Validar Contraseña
console.log("------------------------------------------------")
console.log("Ejercicio 2")
let contraseña = prompt("Cree su contraseña: ");
let Incluye_num_mayus = /^(?=.*[a-zA-Z])(?=.*\d)/.test(contraseña);

function validarContraseña(contraseña) {
    if (contraseña.length >= 8 && Incluye_num_mayus) {
        return true;
    } else {
        return false;
    }
}

console.log("La contraseña es : " + validarContraseña(contraseña));

//----------------------------------------------------------------------------------------
//ejercicio 3 Buscar Producto en Inventario
console.log("------------------------------------------------")
console.log("Ejercicio 3")
const inventario = [
    { nombre: "Camisa", 
        precio: 20 },
    { nombre: "Zapatos", 
        precio: 50 }
];

function buscarProducto(nombre, inventario) {
    if (inventario.some(inventario => inventario.nombre === nombre)) { //.some() sirve para verificar si al menos un elemento de un array cumple con una condición específica
        return inventario.find(inventario => inventario.nombre === nombre); //.find() sirve para buscar un elemento dentro de un array y devolvértelo completo.
    } else {
        return null;
    }
}

console.log(buscarProducto("Camisa", inventario));

//----------------------------------------------------------------------------------------
//Ejercicio 4: Calcular Promedio de Notas
console.log("------------------------------------------------")
console.log("Ejercicio 4")
function calcularPromedio(notas) {
    arraynotas = prompt("Ingrese las notas separadas por comas: ").split(",").map(Number); // .split()  sirve para dividir una cadena de texto (string) y convertirla en un array de subcadenas 
    // .map(Number)  Extraemos únicamente la propiedad numero 
    let sumanotas = arraynotas.reduce((acumular, nota) => acumular + nota, 0);
    // .reduce()  toma todos los elementos de un array y transformarlos en un solo resultado único
    return (sumanotas / arraynotas.length);
    //sirve para saber cuántos elementos contiene una estructura
    console.log("Su promedio : " + calcularPromedio(notas));    
}
console.log("su promedio es: "+calcularPromedio());

//----------------------------------------------------------------------------------------
//Ejercicio 5: Filtrar Usuarios por Edad
console.log("------------------------------------------------")
console.log("Ejercicio 5")
ArrayUsuario = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 28 },
    { nombre: "María2", edad: 10 },
    { nombre: "María3", edad: 2 }
];
function filtrarUsuarios(usuarios,edadMinima) {
    return usuarios.filter(usuario => usuario.edad >= edadMinima);
    //sirve para filtrar un array y devolver uno nuevo que contiene solo los elementos que cumplen con una condición específica
}
let edadMinima = parseInt(prompt("Ingrese la edad mínima: "));
console.log(filtrarUsuarios(ArrayUsuario, edadMinima));

//----------------------------------------------------------------------------------------
//Ejercicio 6: Contador de Palabras
console.log("------------------------------------------------")
console.log("Ejercicio 6")

function contarPalabras(texto){
    let palabra = texto.split(" ");
    return console.log("En numero de palabra es : "+ palabra.length);
     
    
}

console.log(contarPalabras(prompt("Ingrese Texto : ")));

//----------------------------------------------------------------------------------------
// Ejercicio 7: Simulador de Cajero Automático
console.log("------------------------------------------------")
console.log("Ejercicio 7")
function retirarDinero(saldo,monto){
    if (saldo >= monto){
        let resultado = saldo - monto;
        console.log("retiro Exitoso");
        console.log("Queda en su cuenta: "+ resultado);
        return resultado
    } else{
        console.log("Fondos insuficientes");
    }
}

retirarDinero(prompt("Cual es su saldo : "),prompt("Cuanto desesa retirar : "));

//----------------------------------------------------------------------------------------
// Ejercicio 8: Cambio de Moneda
console.log("------------------------------------------------")
console.log("Ejercicio 8")
function convertirMoneda(monto, monedaDestino){
    if (monto >= 0 & monedaDestino.toUpperCase() === "USD" ){
        monedaDestino = monto /4000;
        console.log("su saldo en USD: "+ monedaDestino);
        return monedaDestino
    }
    else if(monto > 0 & monedaDestino.toUpperCase() === "EUR"){
        monedaDestino = monto / 4300;
        console.log("su saldo en EUR: "+ monedaDestino.toFixed(2)); //.toFixed se usa para que el resultado no tenga infinitos decimales 
        return monedaDestino
    } else{
        console.log("Error,Escriba Monto mayor a 0 y USD o EUR ");

    }
};

convertirMoneda(prompt("Cuanto es su monto en COP: "),prompt("A que moneda desea convertirla USD o EUR: "))