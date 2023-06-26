//Instanciar objetos

let contra1 = new Password();
contra1.setContraseña(contra1.getLogitud());
console.log(`La longitud de la contraseña es: ${contra1.getLogitud()} y la contraseña generada es: ${contra1.getContraseña()}`);