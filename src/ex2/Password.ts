//Reto 2 de TS

let defLong: number = 8;

class Password {
    //1-Atributos de la class
    //private
    private longitud: number;
    private contraseña: string;

    //2-Constructor de la class
    constructor(newLongitud: number = defLong){
        this.longitud = newLongitud;
        this.contraseña = this.generadorContraseña();
    }

    //3- Métodos de la class
    generadorContraseña(): string{
        let caracteresContra: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let constraseñaTemp = '';
        for (let i = 0; i < this.longitud; i++) {
            let posicion = Math.floor(Math.random() * caracteresContra.length + 1);
            constraseñaTemp += caracteresContra.charAt(posicion);
        }
        return constraseñaTemp;
    }   

    getLongitud(): number{
        return this.longitud;
    }

    setLongitud(newLongitud: number){
        return this.longitud = newLongitud;
    } 
    
    getContraseña(): string{
        return this.contraseña;
    }
}
