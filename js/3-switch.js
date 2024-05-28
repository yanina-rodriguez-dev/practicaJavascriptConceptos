//especie de menu con if anidados 
// Si el usuario presiona 1  que haga una cosa , si presiona la opcion 2 otra cosa y 3 otra cosa 

// Si el contenido de la variable opcion es exactamente igual a 1 

/*switch(opcion){
    case 1:
        todas las lineas de codigo que quiero hacer si se cumple la opcion 1
        al final de la estructura ponemos
        break; 
    case 2:
            todas las lineas de codigo que quiero hacer si se cumple la opcion 1
        al final de la estructura ponemos
        break; 
    case 3:
            todas las lineas de codigo que quiero hacer si se cumple la opcion 1
        al final de la estructura ponemos
        break; 
    default:
        todas las lineas de caso por defecto    
}
*/

// Solicitar al usuario que seleccione un dia de la semana y le vamos a sugerir un menu para cada dia 
// cada dia: plato principal, bebida y postre 

//  Como le solicito al usuario un dato? con prompt 
//  a donde se va a guardar el resultado ? en una variable const  
 
const dia = prompt('Selecione un dia de la semana 1-Lunes,2-Miercoles , 3-Viernes');

switch(dia){
case '1':
    document.write(`<h2>Menu del lunes</h2>
    <ul>
    <li>Plato principal: Pizza</li>
    <li>Bebida: Cerveza</li>
    <li>Postre:Panqueque con dulced de leche</li>
    </ul>`);
    break;
case '2':
    document.write(`<h2>Menu del miercoles</h2>
    <ul>
    <li>Plato principal: Langostinos con salsa de camaron</li>
    <li>Bebida: Vino</li>
    <li>Postre:Tiramisu</li>
    </ul>`)
    break;
    case '3':
    document.write(`<h2>Menu del viernes</h2>
    <ul>
    <li>Plato principal: Empanadas</li>
    <li>Bebida: Vino</li>
    <li>Postre:Helado</li>
    </ul>`)
    break;
    default:
        document.write('No ingreso un valor correcto')
}