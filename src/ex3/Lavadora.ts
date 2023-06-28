//Reto 3 de TS- Subclase Lavadora

const defCarga: number = 5;

class Lavadora extends Electrodoméstico{
    //1- Atributos de la class
    //private
    private carga: number;

    //2- Constructor de la class
    constructor(newColor:tipoColor, newCE:string, newPeso:number){
        super(newColor, newCE, newPeso);
        this.carga = defCarga;
    }

    //3- Métodos de la class
    getCarga(){
        return this.carga;
    }
    
    setCarga(newCarga: number){
        return this.carga = newCarga;
    }

    precioFinalL(){
        let cargaT = this.getCarga();
        let precioL = super.precioFinal();
        if (cargaT > 30) {
            precioL += 50;
        }
        return precioL;
    }
}

