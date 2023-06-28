//Reto 3 de TS - clase Padre Electrodomesticos

type tipoColor = 'blanco' | 'negro' | 'rojo' | 'azul' | 'gris';

const defCE: string = 'F';
const defColor: string = 'blanco';
const defPrecio: number = 100;

class Electrodoméstico {    
    //1- Atributos de la class
    //protected
    protected precioBase: number;
    protected color: tipoColor;
    protected CE: string;
    protected peso: number;

    //2-Constructor de la class
    constructor(newColor:tipoColor, newCE:string, newPeso:number){
        this.precioBase = defPrecio;
        this.color = this.comprobarColor(newColor) as tipoColor;
        this.CE = this.comprobarConsumoEnergetico(newCE);
        this.peso = newPeso;
    }

    //3-Métodos de la class
    getPrecioBase(){
        return this.precioBase;
    }

    setPrecioBase(newPrecioBase: number){
        return this.precioBase = newPrecioBase;
    }

    getColor(){
        return this.color;
    }

    getCE(){
        return this.CE;
    }

    getPeso(){
        return this.peso;
    }

    comprobarConsumoEnergetico(letra: string){
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
    
    comprobarColor(color:tipoColor) {
        switch (color) {
            case 'negro':
                return 'negro';
                break;
            case 'rojo':
                return 'rojo';
                break;
            case 'azul':
                return 'azul';
                break;
            case 'gris':
                return 'gris';
                break;
            default:
                return defColor;
                break;
        }
    }

    precioFinal(): number{
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
        
        if(peso <= 19){
            precio += 10
            return precio;
        }else if(peso >= 20 && peso <=49){
            precio += 50
            return precio;
        }else if(peso >= 50 && peso <=79){
            precio += 80
            return precio;
        }else{
            precio += 100
            return precio;
        }
    }
}