//const prompt = require("prompt-sync")();
const inputNumero = document.getElementById('numero');

//let numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));

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
//console.log(calcularFactorial(numero));


//HTML
function calcular() {

    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").textContent =
            "Por favor ingrese un número.";
        return;
    }

    let resultado = calcularFactorial(numero);

    document.getElementById("resultado").textContent =
        "El factorial es: " + resultado;
}