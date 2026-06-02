
class Empleado {
    activo = true;
    equipo = [];
    constructor(nombre, cargo, salario){
        this.nombre = String(nombre);
        this.cargo = String(cargo);
        this.salario = Number(salario);
        this.equipo = [];
        

        this.presentarse = function(){
            console.log(`Hola un Gusto, mi nombre es ${this.nombre} y soy ${this.cargo} en esta empresa`);
        };
        this.calcularSalarioAnual = function(){
            return this.salario * 12;
        };

        this.desactivar = function(){
            this.activo = false;
            console.log(`El empleado ${this.nombre} ha sido desactivado`);
        };


        this.info = function(){
            console.log(`
            Nombre del empleado: ${this.nombre}
            Cargo del empleado: ${this.cargo}
            Salario mensual del empleado: ${this.salario}
            Estado del empleado: ${this.activo}
            Numero de personas en el equipo: ${this.equipo.length}
            `);
            return this.equipo.length; 
        }
    }
}
module.exports = { Empleado };
/*
//instancias 
const empleado1 = new Empleado("Juan perez", "Desarrollador", 3000);
const empleado2 = new Empleado("Maria gonzales", "Diseñadora", 2500);
const empleado3 = new Empleado("Pedro rodriguez", "QA", 3500)
//empleado3.desactivar();

console.log(empleado1.info());
console.log(empleado2.calcularSalarioAnual());
console.log(empleado3.presentarse());

//---------------------------------

*/