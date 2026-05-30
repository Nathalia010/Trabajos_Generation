const prompt = require("prompt-sync")();

//1
// 
let nombre = "Karen";
let edad = 26;
let esEstudiante = true;

let sinValor = undefined;
let valorNulo = null;

console.log(typeof sinValor); 
console.log(typeof valorNulo);
//2--------------------------------------------
//Ejercicio 1
let añoNacimiento = prompt("¿En qué año naciste? : ");

let añoActual = new Date().getFullYear();
let edadCalculada = añoActual - añoNacimiento;

console.log("Tu edad es: " + edadCalculada);

//Ejercicio 2
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

let suma = numero1 + numero2;
console.log("La suma es: " + suma);

// 3-----------------------------------------
//Ejercicio 1
let Edad2 = parseInt(prompt("¿Cuál es tu edad? : "));

if (Edad2 >= 18) {
    (console.log("Puedes Ingresar"));
} else {
    console.log("No puedes Ingresar");
};

//4------------------------------------------
//Ejercicio 1

let numeroContador = parseInt(prompt("Ingresa un número para contar: "));

numeroContador = Number(numeroContador);

while (numeroContador) {
    console.log(numeroContador);
    numeroContador--;
    
};
//Ejercicio 2

let contraseña = "1234";

contraseña = prompt("Ingresa tu contraseña: ");

while (contraseña !== "1234") {
    console.log("Contraseña incorrecta.");
    contraseña = prompt("Intenta nuevamente: ");
}
console.log("Contraseña correcta.");

//5-----------------------------------------
//Ejercicio 1
let i=0;
for (i=0; i<=10; i++) {
    console.log(i);
};

let j = Number(prompt("Ingresa un número para la tabla de multiplicar: "));
console.log("Tabla de multiplicar del ", j );
for ( i = 0; i <= 10; i++) { 
    console.log(j + " x " + i + " = " + (j *i));
};
