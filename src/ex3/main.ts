

let arrayElectro = [];
    
//Instancias de objetos class Electrodoméstico

let electrD1 = new Electrodoméstico ('rojo', 'B', 40);
electrD1.setPrecioBase(600)
let electrD2 = new Electrodoméstico ('negro', 'E', 30);
electrD2.setPrecioBase(200)
let electrD3 = new Electrodoméstico ('gris', 'D', 35);
electrD3.setPrecioBase(300)
let electrD4 = new Electrodoméstico ('negro', 'F', 60);

//Instancias de objetos class hija Lavadora

let lv1 = new Lavadora('negro', 'D', 40);
lv1.setCarga(7);
let lv2 = new Lavadora('azul', 'E', 20);
lv2.setPrecioBase(75);
let lv3 = new Lavadora('blanco', 'A', 30);
lv3.setCarga(10);
lv3.setPrecioBase(150);

//Instancias de objetos class hija Television 

let tv1 = new Television('negro', 'A', 15);
tv1.setCuatroK(true);
tv1.setResolucion(50);
tv1.setPrecioBase(1200);
let tv2 = new Television('blanco', 'C', 20);
tv2.setResolucion(35);
tv2.setPrecioBase(750);
let tv3 = new Television('azul', 'D', 17);
tv3.setPrecioBase(550);

//Operaciones
let sumaLV = lv1.precioFinalL() + lv2.precioFinalL() +lv3.precioFinalL();
let sumaTV = tv1.precioFinalT() + tv2.precioFinalT() +tv3.precioFinalT();
let sumaTotal = electrD1.precioFinal() + electrD2.precioFinal() + electrD3.precioFinal() + electrD4.precioFinal() + sumaLV + sumaTV;

//Mostrar por consola 
arrayElectro.push(electrD1, electrD2, electrD3, electrD4, lv1, lv2, lv3, tv1, tv2, tv3);
console.log(arrayElectro);
console.log(`El precio total de todos los electrodomésticos es de: ${sumaTotal} €`);
console.log(`El precio total de todos los televisores es de: ${sumaTV} €`);
console.log(`El precio total de todos los televisores es de: ${sumaLV} €`);