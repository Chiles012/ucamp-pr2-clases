/*

    Abstraer
    - usuarios
    - materias
    - titulo
    - instrucciones
    - fechaEntraga
    - fechaCreacion
    - horaEntrega
    - puntos

*/

class Task {

    usuarios = [];
    materias = [];
    titulo = "";
    instrucciones = "";
    fechaEntraga = new Date();
    fechaCreacion = new Date();
    horaEntraga = new Date().getHours();
    puntos = 0;

    constructor(
        usuarios = [],
        materias = [],
        titulo = "",
        instrucciones = "",
        fechaEntraga = "",
        horaEntraga = "",
        puntos = 0
    ) {
        this.titulo = titulo;
        this.usuarios = usuarios;
        this.materias = materias;
        this.instrucciones = instrucciones;
        this.fechaEntraga =  fechaEntraga;
        this.puntos = puntos;
        this.horaEntraga = horaEntraga;
    }

}

// Declarando una clase
const nuevaTarea = new Task([], [], "Git y Github", "Elaborar un repositorio", new Date('2023-01-18'), '12', 1);
