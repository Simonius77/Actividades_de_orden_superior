/*Ejercicio 9

Escribe una función encontrarPalabra que tome un array de palabras y una palabra 
busqueda, y devuelva la primer palabra del array que sea igual a busqueda. 
Si no se encuentra ninguna palabra igual, la función debe devolver null. 
Utiliza .find para resolver este problema.

*/

function encontrarPalabra(array, buscar) {
    //recorre el array buscando la misma palabra y del mismo tipo de dato
    const resultado = array.find(palabra => palabra === buscar);
    //si el tipo de dato es diferente o la palabra no esta devolvera null
    return resultado !== undefined ? resultado : null;
}
// prueba, le pasamos el array de palabras y la palabra a buscar 
// y nos tiene que devover la palabra encontarda, en este caso coche.

console.log(encontrarPalabra(["casa", "coche", "portatil", "camion"], "coche"));
// en este caso vamos a buscar una palabra que no exista y nos tiene que devolver null.
console.log(encontrarPalabra(["casa", "coche", "portatil", "camion"], "mansion"));