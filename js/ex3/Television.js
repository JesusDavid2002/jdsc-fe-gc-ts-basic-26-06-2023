"use strict";
//Reto 3 de TS- Subclase Television
const defResolucion = 20;
class Television extends Electrodoméstico {
    //2-Constructor de la class
    constructor(newColor, newCE, newPeso) {
        super(newColor, newCE, newPeso);
        this.resolucion = defResolucion;
        this.cuatroK = false;
    }
    //3-Métodos de la class
    getResolucion() {
        return this.resolucion;
    }
    setResolucion(newRevolucion) {
        return this.resolucion = newRevolucion;
    }
    getCuatroK() {
        return this.cuatroK;
    }
    setCuatroK(newCuatroK) {
        return this.cuatroK = newCuatroK;
    }
    precioFinal() {
        let precioT = super.precioFinal();
        if (this.resolucion > 40) {
            precioT += precioT * 0.3;
        }
        if (this.cuatroK == true) {
            precioT += 50;
        }
        return precioT;
    }
}
