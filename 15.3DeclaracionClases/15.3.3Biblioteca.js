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
        this.registrarEpisodios = function(cantidad) {
            return this.episodiosPorTemporada = cantidad;
        }
        this.totalEpisodios = function() {
            return this.episodiosPorTemporada * temporadas;
        }
        this.ficha = function() {
             return `${this.titulo} (${this.anio}) 
             - Genero: ${this.genero}
             - Temporadas: ${temporadas}
             - Episodios por temporada: ${this.episodiosPorTemporada}`;
            
        }
}
}