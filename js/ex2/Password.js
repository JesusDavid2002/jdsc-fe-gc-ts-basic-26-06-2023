"use strict";
//Reto 2 de TS
let defLong = 8;
class Password {
    //2-Constructor de la class
    constructor() {
        this.longitud = defLong;
        this.constraseña = [];
    }
    //3- Métodos de la class
    setContraseña(newLongi) {
        for (let i = 0; i < newLongi; i++) {
            this.constraseña.push(Math.floor(Math.random() * 10));
        }
    }
    getContraseña() {
        return this.constraseña.join("");
    }
    getLogitud() {
        return this.longitud;
    }
}
