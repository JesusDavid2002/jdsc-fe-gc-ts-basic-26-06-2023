// Reto 1 de TS

type genero = 'H' | 'M';
const defSexo: genero = 'H';

class Persona {
    //1-Atributos de class
    //private
    private nombre: string;
    private edad: number;
    private DNI: string
    private sexo: genero;
    private peso: number;
    private altura: number;

    //2-Constructor de la class
    constructor(newDNI: string){
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    
}