// declarar variables    
    
const prompt = require('prompt-sync')();
let saldo = 500000;
let pinCorrecto = "1234";
    //Bienvenida al usuario
console.log(`
    Bienvenido al cajero automático
       `);
    //ingreso pin
let pinIngresado =prompt("Ingrese su PIN: ");
//----------------------- FUNCIONES--------------------
function validarPin(pin) {
    if (pin === pinCorrecto) {
        return true;
    }
    return false;
}
// función para mostrar el saldo actual
function mostrar_saldo() {
    console.log(`
        Su saldo actual es: $ ${saldo} pesos
        `);
}

function mostrar_menu() {
    console.log("");
    console.log("\x1b[34m-------------------MENU CAJERO-------------------\x1b[0m");
    console.log(`
            1. Consultar saldo
            2. Retirar dinero
            3. Depositar dinero
            4. Calcular interés del 10% anual
            5. Convertir saldo a dólares
            6. Salir
            `);
}

function retirar_dinero() {
    let cantidadRetiro = parseFloat(prompt("Ingrese el monto a retirar: "));
                    if (cantidadRetiro <= 0) {
                        console.log("\x1b[31mMonto inválido. El retiro debe ser mayor a cero.\x1b[0m");
                        console.log("");
                    } else if (cantidadRetiro % 10000 !== 0) {
                        console.log("\x1b[31mEl monto a retirar debe ser un múltiplo de 10,000.\x1b[0m");
                        console.log("");
                    } else if (cantidadRetiro > saldo) {
                        console.log("\x1b[31mFondos insuficientes\x1b[0m");
                        console.log("");
                    } else {
                        saldo = saldo - cantidadRetiro;
                        console.log("");
                        console.log("\x1b[32mRetiro exitoso. Su nuevo saldo es: $", saldo, "\x1b[0m");
                        console.log("");
                    }
}

function depositar_dinero() {
    let cantidadDeposito = parseFloat(prompt("Ingrese el monto a depositar: "));
                    if (cantidadDeposito <= 0) {
                        console.log("\x1b[31mMonto inválido. El depósito debe ser mayor a cero.\x1b[0m");
                        console.log("");
                    } else {
                        
                        saldo = saldo + cantidadDeposito;
                        console.log("\x1b[32mDepósito exitoso. Su nuevo saldo es: $", saldo, "\x1b[0m");
                        console.log("");
                    }
}
function calcular_interes() {
    let ganancia = saldo * 10 / 100;
                    let saldoConInteres = saldo + ganancia;
                    console.log(`        Su ganancia anual por intereses es: $`, ganancia, `
        Su saldo con interés del 10% anual es: $`, saldoConInteres, `
                        
        la operación realizada: saldo x 10 / 100.`);
}

function convertir_a_dolares() {
    console.log("        la tasa de cambio: 1 USD = 4000 COP.");
                    let dólares = saldo / 4000;
                    console.log(`
            Su saldo en dólares es: $ `,dólares,` USD
                        
            la operación realizada: saldo / 4000.`);
}
    

if (!validarPin(pinIngresado)) {
    console.log("");
    console.log("\x1b[31mPIN INVALIDO\x1b[0m");
    console.log("");
}else {
    console.log("");
    console.log("\x1b[32mPIN CORRECTO\x1b[0m");
    console.log("");
    let opcion = 0;
    while (opcion !== 6){
            mostrar_menu();
            opcion = parseInt(prompt("Ingrese una opción: "));
            switch (opcion) {
                case 1:
                    console.log("\x1b[34mOpcion Consultar saldo\x1b[0m");
                    mostrar_saldo();
                    break;
                case 2:
                    console.log("\x1b[34mOpción de retiro de dinero\x1b[0m");
                    mostrar_saldo();
                    retirar_dinero();
                    break;
                case 3:
                    console.log("\x1b[34mOpción de depósito de dinero\x1b[0m");
                    mostrar_saldo();
                    depositar_dinero();
                    break;
                case 4:
                    console.log("\x1b[34mOpción de cálculo de interés\x1b[0m");
                    mostrar_saldo();
                    calcular_interes();
                    break;
                case 5:
                    console.log("\x1b[34mOpción de conversión a dólares\x1b[0m");
                    mostrar_saldo();
                    convertir_a_dolares();
                    
                    break;
                case 6:
                    console.log("\x1b[34mOpcion SALIR \x1b[0m");
                    console.log(`
            Saliendo del cajero automático...
                
            Gracias por usar el cajero automático. ¡Vuelve pronto!
                        `);
                    
                    break;

                default:
                    console.log("La opción no es válida y que el usuario debe elegir un número entre 1 y 6.");            
                }
            };
        }
