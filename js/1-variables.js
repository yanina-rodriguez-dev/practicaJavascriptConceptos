//.- Escribe un programa de una sola línea que haga que 
//aparezca en la pantalla un alert que diga “un mensaje

//declarar una variable, uso lowercamelcase

let nombreUsuario = 'Gerardo'; 
 const anio = 2024; 
//accede a la consola del navegador para que se muetsre el mensaje
console.log(nombreUsuario);
console.log('Hola mundo');
// concateno con el + para unir 
console.log(nombreUsuario + ' es alumno del año ' + anio);

//concatenar con el $ con bagticks, escribo dentro de las comillas todo:
console.log(`${nombreUsuario} es alumno del ${anio}`);

// Si imprimo por document.write imprimo una cadena de texto en el documento HTML 
document.write(nombreUsuario+ 'es alumno del '+ anio);
//escribir html en el documento 

document.write('<h1 class="tituloPrincipal">Hola Mundo</h1>');

//VENTANAS EMERGENTES: ALERTS
alert('Este es mi primer alert')

//Modificamos el contenido de la variable 
 nombreUsuario = 'Mauricio';

 document.write(nombreUsuario + 'Es alumno del año' + anio);
 document.write( '<br><br/>');
 
