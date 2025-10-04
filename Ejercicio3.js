/*Ejercicio 3

Dado un array de objetos que representan a personas, utiliza .map() para devolver un nuevo array que contenga 
las edades de cada persona.
 const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 35 },
{ name: 'Dave', age: 40 }
];
*/

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 35 },
{ name: 'Dave', age: 40 }

];

const edades = people.map(persona => persona .age);

console.log(edades);