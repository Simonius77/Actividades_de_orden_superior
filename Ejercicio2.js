/*Ejercicio 2
Dado un array que contiene cadenas de texto, utiliza .map() para devolver un 
nuevo array que contenga la longitud de cada cadena.
const strings = ['hello', 'world', 'how', 'are', 'you'];*/

const strings = ['hello', 'world', 'how', 'are', 'you'];

//.map recorre y crea un nuevo array en el que guarada la longitud de cada palabra del array anterior
const longitud = strings.map(palabra => palabra.length);
//mostramos 
console.log(longitud);