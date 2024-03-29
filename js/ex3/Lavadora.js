"use strict";
//Reto 3 de TS- Subclase Lavadora
const defCarga = 5;
class Lavadora extends Electrodoméstico {
    //2- Constructor de la class
    constructor(newColor, newCE, newPeso) {
        super(newColor, newCE, newPeso);
        this.carga = defCarga;
    }
    //3- Métodos de la class
    getCarga() {
        return this.carga;
    }
    setCarga(newCarga) {
        return this.carga = newCarga;
    }
    precioFinal() {
        let precioL = super.precioFinal();
        if (this.carga > 30) {
            precioL += 50;
        }
        return precioL;
    }
}
