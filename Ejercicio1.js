/*Ejercicio 1
Dado un array de números, utiliza .map() para multiplicar cada elemento del array 
por 2 y devolver un nuevo array con los resultados.
 const numbers = [1, 2, 3, 4, 5];
*/
//array con los valores iniciles
const numbers =[1, 2, 3, 4, 5];
//funcion de flecha donde recorre el array reocge el valor lo multiplica y lo guarda en el nuevo array
const numbers2 = numbers.map(num => num*2);
//mostramos el array por consola
console.log(numbers2);