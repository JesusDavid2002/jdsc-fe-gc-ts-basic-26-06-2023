"use strict";
//Reto 2 de TS
let defLong = 8;
class Password {
    //2-Constructor de la class
    constructor(newLongitud = defLong) {
        this.longitud = newLongitud;
        this.contraseña = this.generadorContraseña();
    }
    //3- Métodos de la class
    generadorContraseña() {
        let caracteresContra = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let constraseñaTemp = '';
        for (let i = 0; i < this.longitud; i++) {
            let posicion = Math.floor(Math.random() * caracteresContra.length + 1);
            constraseñaTemp += caracteresContra.charAt(posicion);
        }
        return constraseñaTemp;
    }
    getLongitud() {
        return this.longitud;
    }
    setLongitud(newLongitud) {
        return this.longitud = newLongitud;
    }
    getContraseña() {
        return this.contraseña;
    }
}
