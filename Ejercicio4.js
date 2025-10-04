/*Ejercicio 4

Dado un array de objetos que representan a personas y una edad mínima, utiliza .map() para devolver un nuevo
arreglo que contenga solo las personas mayores de edad (edad mayor o igual a 18 años).
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 35 },
{ name: 'Dave', age: 12 }

];

*/
const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 17 },
{ name: 'Charlie', age: 35 },
{ name: 'Dave', age: 12 }

];
//el filter filtra la edad por la formula y el map muestra los nombres
const mayoEdad = people.filter(persona => persona.age >=18).map(persona=>persona.name);
console.log(mayoEdad);