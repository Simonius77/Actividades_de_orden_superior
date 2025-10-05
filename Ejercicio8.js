/*Ejercicio 8

Escribe una función palabrasLargas que tome un array de palabras y un número n, y 
devuelva un array con solo las palabras del array original que tienen más de n caracteres. 
Utiliza .filter para resolver este problema.
*/

//esta funcion recoge los parametros palabras y n que es el largo que queremos comprobar
function palabrasLargas(palabras, n){
    return palabras.filter(palabra => palabra.length > n);
}

//creamos el array de palabras

const lista =["mesa", "silla", "Plato"];

//creamos la variable resultado donde guardamos el resultado de aplicar la funcion
//en los parametros le pasamos el array de palabras y el numero de caracteres que queremso comprobar

const resultado = palabrasLargas(lista, 5);
//mostramos resultado

console.log(resultado);