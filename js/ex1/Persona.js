"use strict";
// Reto 1 de TS
const defSexo = 'H';
class Persona {
    //2- Constructor de la class
    constructor(newDNI) {
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    //3- Métodos de la class
    getNombre() {
        return this.nombre;
    }
    setNombre(newNombre) {
        return this.nombre = newNombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(newEdad) {
        return this.edad = newEdad;
    }
    getDNI() {
        return this.DNI;
    }
    setDNI(newDNI) {
        return this.DNI = newDNI;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(newSexo) {
        return this.sexo = newSexo;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(newPeso) {
        return this.peso = newPeso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(newAltura) {
        return this.altura = newAltura;
    }
}
