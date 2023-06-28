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
    precioFinalT() {
        let resolT = this.getResolucion();
        let cuatroKT = this.getCuatroK();
        let precioT = super.precioFinal();
        if (resolT > 40) {
            precioT += precioT * 0.3;
        }
        if (cuatroKT == true) {
            precioT += 50;
        }
        return precioT;
    }
}
