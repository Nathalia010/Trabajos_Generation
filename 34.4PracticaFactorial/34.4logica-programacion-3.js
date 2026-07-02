const prompt = require("prompt-sync")();
const inputNumero = document.getElementById('numero');

//let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
let numero = parseInt(inputNumero.value);
function calcularFactorial(numero) {
    if (numero <= 0) {
        return "El factorial no está definido para números negativos.";
    }
    for (let i = numero -1; i >= 1; i--){
        numero *= i;
        console.log( i + "x" + numero/i );
        
    }
    console.log("El factorial es: " + numero);
    return numero;
}
console.log(calcularFactorial(numero));