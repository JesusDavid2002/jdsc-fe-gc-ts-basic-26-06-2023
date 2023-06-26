"use strict";
//Reto 3 de TS - clase Padre Electrodomesticos
const defCE = 'F';
const defColor = 'blanco';
const defPrecio = 100;
class Electrodoméstico {
    //2-Constructor de la class
    constructor(newColor, newCE, newPeso) {
        this.precioBase = defPrecio;
        this.color = this.comprobarColor(newColor);
        this.CE = this.comprobarConsumoEnergetico(newCE);
        this.peso = newPeso;
    }
    //3-Métodos de la class
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getCE() {
        return this.CE;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        switch (letra) {
            case 'A':
                return 'A';
            case 'B':
                return 'B';
            case 'C':
                return 'C';
            case 'D':
                return 'D';
            case 'E':
                return 'E';
            default:
                return defCE;
        }
    }
    comprobarColor(colorComp) {
        switch (colorComp) {
            case 'blanco':
                return 'blanco';
            case 'negro':
                return 'negro';
            case 'rojo':
                return 'rojo';
            case 'azul':
                return 'azul';
            case 'gris':
                return 'gris';
            default:
                return defColor;
        }
    }
    precioFinal() {
        let letra = this.getCE();
        let peso = this.getPeso();
        let precio = this.getPrecioBase();
        switch (letra) {
            case 'A':
                precio += 100;
                break;
            case 'B':
                precio += 80;
                break;
            case 'C':
                precio += 60;
                break;
            case 'D':
                precio += 50;
                break;
            case 'E':
                precio += 30;
                break;
            case 'F':
                precio += 10;
                break;
        }
        if (peso <= 19) {
            precio += 10;
            return precio;
        }
        else if (peso >= 20 && peso <= 49) {
            precio += 50;
            return precio;
        }
        else if (peso >= 50 && peso <= 79) {
            precio += 80;
            return precio;
        }
        else {
            precio += 100;
            return precio;
        }
    }
}
