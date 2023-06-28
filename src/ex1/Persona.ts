// Reto 1 de TS

type genero = 'H' | 'M';
const defSexo: genero = 'H';

class Persona {
    //1- Atributos de class
    //private
    private nombre: string;
    private edad: number;
    private DNI: string
    private sexo: genero;
    private peso: number;
    private altura: number;

    //2- Constructor de la class
    constructor(newDNI: string){
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDNI;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    
    //3- Métodos de la class
    getNombre(){
        return this.nombre;
    }

    setNombre(newNombre: string){
        return this.nombre = newNombre;
    }
    
    getEdad(){
        return this.edad;
    }

    setEdad(newEdad: number){
        return this.edad = newEdad;
    }

    getDNI(){
        return this.DNI;
    }

    setDNI(newDNI: string){
        return this.DNI = newDNI;
    }
    
    getSexo(){
        return this.sexo;
    }

    setSexo(newSexo: genero){
        return this.sexo = newSexo;
    }
    
    getPeso(){
        return this.peso;
    }

    setPeso(newPeso: number){
        return this.peso = newPeso;
    }
    
    getAltura(){
        return this.altura;
    }

    setAltura(newAltura: number){
        return this.altura = newAltura;
    }
}