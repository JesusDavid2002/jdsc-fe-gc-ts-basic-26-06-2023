"use strict";
// Reto 1 de TS
const defSexo = 'H';
class Persona {
    //2-Constructor de la class
    constructor(newDNI) {
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
}
