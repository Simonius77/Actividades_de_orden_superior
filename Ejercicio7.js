/*Ejercicio 7

Escribe una función soloPares que tome un array de números y devuelva un array
 con solo los números pares del array original. Utiliza .filter para resolver este problema.

*/

function soloPares(numeros){
    return numeros.filter(num => num % 2 === 0);

}
//tiene que mostrar solo los numeros pares
console.log(soloPares([1, 0, 3, 2, 8, 5, 4, 9, 5, 4, 6]));