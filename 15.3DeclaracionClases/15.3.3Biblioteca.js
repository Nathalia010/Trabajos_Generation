//Ejercicio 2 — Biblioteca de contenido
class Contenido {
    disponible = true;
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.ficha= function() {
            return `${this.titulo} (${this.anio}) - Genero: ${this.genero}`;
        };
        this.retirar =function() {
            disponible = false;
            return `el contenido ${this.titulo} ha sido retirado de la biblioteca:  ${this.disponible}`;
        }
        this.estado = function() {
            if (this.disponible = true) {
                return `el contenido ${this.titulo} está disponible en la biblioteca`;
            } else {
                return `el contenido ${this.titulo} NO está disponible`;
            };
        };
    };
}
class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
        this.duracionFormateada = function() {
            // 1. Obtenemos las horas completas dividiendo por 60 y redondeando hacia abajo
            const horas = Math.floor(this.duracion / 60);
            // 2. Obtenemos los minutos restantes usando el residuo de la división
            const minutos = this.duracion % 60;
             // 3. Retornamos la cadena de texto formateada con los datos obtenidos
            return `${horas}h ${minutos}min`;
            
        };
    };
}
class Serie extends Contenido {
    episodiosPorTemporada = 0;
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;

        this.registrarEpisodios = function(cantidad) {
            return this.episodiosPorTemporada = cantidad;
        }
        this.totalEpisodios = function() {
            return this.episodiosPorTemporada * this.temporadas;
        }
        this.ficha = function() {
             return `${this.titulo} (${this.anio}) 
             - Genero: ${this.genero}
             - Temporadas: ${this.temporadas}
             - Episodios por temporada: ${this.episodiosPorTemporada}`;
            
        }
}
}
// catalago 
let catalogo = [];
const pelicula1 = new Pelicula("Inception", "Ciencia ficción", 2010, 148);
const pelicula2 = new Pelicula("The Godfather", "Crimen", 1972, 175);
const pelicula3 = new Pelicula("The Shawshank Redemption", "Drama", 1994, 142);

const serie1 = new Serie("Stranger Things", "Ciencia ficción", 2016, 4);
const serie2 = new Serie("Game of Thrones", "Fantasía", 2011, 8);
const serie3 = new Serie("Breaking Bad", "Crimen", 2008, 5);

catalogo.push(pelicula1, pelicula2, pelicula3, serie1, serie2, serie3);


for (let contenido of catalogo) {
    console.log(contenido.ficha());
    console.log(contenido.estado());
    console.log("------------------------------");
}

