//Clase extendida: Lider
import pkg from './15.3.1SisEmpleados.js';
const { Empleado } = pkg;


class Lider extends Empleado {
    constructor(nombre, cargo, salario, equipo = []){
        super(nombre, cargo, salario);
        this.cargo = "Lider de equipo";
        this.equipo = equipo;
        
        this.presentarEquipo = function(){
            //console.log(`Hola, soy ${this.nombre} y lidero el equipo de ${this.equipo}`);
            //return `Hola, soy ${this.nombre} y lidero el equipo de ${this.equipo}`; 
            const nombres = this.equipo.map(miembro => miembro.nombre).join(', ');
            return `Hola, soy ${this.nombre} y lidero el equipo de: ${nombres || "nadie aún"}.`; //si no hay nadie en el equipo, muestra no hay nadie
        }
        this.agregarMiembro = function(nuevoEmpleado){
            this.equipo.push(nuevoEmpleado);
            console.log(`El miembro ${nuevoEmpleado.nombre} ha sido agregado al equipo de ${this.nombre}`);
        };
        this.calcularNominaTotal = function() {
            let costoTotal = this.salario * 12; // Sueldo anual del líder
            for (let miembro of this.equipo) {
                costoTotal += miembro.salario * 12; // Sueldo anual de cada miembro
            }
            return costoTotal;
        };

    }
}


//Pista: Para unir los nombres del equipo en una cadena, el metodo .join() de array puede ayudar
//0.0

const empleado1 = new Empleado("Juan perez", "Desarrollador", 3000);
const empleado2 = new Empleado("Maria gonzales", "Diseñadora", 2500);
const empleado3 = new Empleado("Pedro rodriguez", "QA", 3500);
const empleado4 = new Empleado("Ana lopez", "Desarrolladora", 3200);

const lider1 = new Lider("Carlos Ramirez", "Lider de equipo", 5000, [empleado1, empleado2]);
const lider2 = new Lider("Sofia Martinez", "Lider de equipo", 5500, [empleado3, empleado4]);
const Lider1 = [empleado1.nombre, empleado2.nombre];
const Lider2 = [empleado3.nombre, empleado4.nombre];

//Calculen el costo total mensual de nomina sumando el salario de todos?...
console.log("___________Nominas____________");

console.log(`Nómina anual total del equipo de Carlos: $${lider1.calcularNominaTotal()}`);
console.log(`Nómina anual total del equipo de Sofia: $${lider2.calcularNominaTotal()}`);
console.log("total : " + (lider1.calcularNominaTotal() + lider2.calcularNominaTotal()));

console.log("-------------------------------");
console.log(`Salario anual de ${empleado2.nombre}: $${empleado2.calcularSalarioAnual()}`);
console.log("___________desactivar un empleado____________");

console.log(`El empleado ${empleado3.nombre} ha sido desactivado: ${empleado3.activo}`);
console.log("___________información del lider 1____________");
console.log(lider1.info());
console.log("___________EQUIPO____________");
console.log(lider1.presentarEquipo());

console.log("___________información del lider 2____________");
console.log(lider2.info());
console.log("-------------------------------------");
const empleado5 = new Empleado("Luis Fernandez", "Diseñador UX", 2800);
lider2.agregarMiembro(empleado5);
console.log("se ha agregado un nuevo miembro al equipo 2");
console.log("-------------------------------------");
console.log(lider2.presentarEquipo());








