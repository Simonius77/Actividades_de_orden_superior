/*Ejercicio 5

Escribe una función maximo que tome un array de números y devuelva el
 número máximo del array. Utiliza .reduce para resolver este problema.
*/
// utiliza el metodo burbuja para recorrer el array y guarda el numero 
// en max si el siguiente es mayor lo cambia y asi sucesivamente.
function maximo(numbers) {
    return numbers.reduce((max, num)=>(num > max ? num: max), numbers[0]);
} 
//para mostrar el funcionamiento le pasamos una array y nos devolvera el mayor.

console.log(maximo([5, 8, 9, 2, 1, 3]));