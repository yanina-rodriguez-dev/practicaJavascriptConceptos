// Estructura condicionales

//Solicitar la edad del usuario y ostrar por pantalla
//Pedirle la edad al usuario 
//puede votar a partir de los 18
//el prompt es una ventana emergente 

let edad = parseInt(prompt('Ingrese su edad'));
console.log(typeof(edad));

 //typeOf me sirve para saber el tipo de dato que tiene una variable 
 
// parseInt('40);
// parseFloat('50.5')
if (edad >0 && edad <130 ){
    if (edad >=16 &&  edad <=18 || edad >=70){
        document.write('Es optativo votar');
    }else{
        if(edad >= 18 && edad <70){
            document.write('Es obligatorio votar');
        }else{
            document.write('No puede votar')
        }
        // document.write('Usted no puede votar');
    }
}else{
    document.write('No ingreso un valor valido');
}

