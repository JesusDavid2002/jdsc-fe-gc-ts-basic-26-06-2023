//Instancias de objetos class Electrodoméstico

let electrD1 = new Electrodoméstico ('rojo', 'G', 40);
electrD1.comprobarConsumoEnergetico(electrD1.getCE());
electrD1.comprobarColor(electrD1.getColor());
console.log(electrD1);
console.log(`El precio final del electrodoméstico es de ${electrD1.precioFinal()}€`);

let electrD2 = new Electrodoméstico ('negro', 'A', 20);
console.log(electrD2);
console.log(`El precio final del electrodoméstico es de ${electrD2.precioFinal()}€`);

//Instancias de objetos class hija Lavadora

let lv1 = new Lavadora('negro', 'D', 10);
console.log(lv1);
console.log(lv1.precioFinalL());