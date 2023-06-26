//Reto 2 de TS

let defLong:number = 8;

class Password {
    //1-Atributos de la class
    //private
    private longitud: number;
    private constraseña: number[];

    //2-Constructor de la class
    constructor(){
        this.longitud = defLong;
        this.constraseña = [];
    }

    //3- Métodos de la class
    setContraseña(newLongi:number):void{
        for (let i = 0; i < newLongi; i++) {
            this.constraseña.push(Math.floor(Math.random()*10));
        }
    }

    getContraseña():string{
        return this.constraseña.join("");
    }

    getLogitud():number{
        return this.longitud;
    }
}
