//Reto 3 de TS- Subclase Television

const defResolucion: number = 20;

class Television extends Electrodoméstico {
     //1- Atributos de la class
    //private
    private resolucion: number;
    private cuatroK: boolean;

    //2-Constructor de la class
    constructor(newColor:tipoColor, newCE:string, newPeso:number){
        super(newColor, newCE, newPeso);
        this.resolucion = defResolucion;
        this.cuatroK = false;
    }

    //3-Métodos de la class
    getResolucion(){
        return this.resolucion;
    }
    
    setResolucion(newRevolucion: number){
        return this.resolucion = newRevolucion;
    }

    getCuatroK(){
        return this.cuatroK;
    }

    setCuatroK(newCuatroK: boolean){
        return this.cuatroK = newCuatroK;
    }

    precioFinal(): number{
        let precioT = super.precioFinal();
        if (this.resolucion > 40) {
            precioT += precioT *0.3;
        }
        if (this.cuatroK == true){
            precioT += 50;
        }
        return precioT;
    }
}