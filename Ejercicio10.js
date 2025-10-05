/*
Ejercicio 10

Escribe una función contarVocales que tome un string y devuelva la cantidad de vocales 
que hay en el string. Utiliza .reduce para resolver este problema.
*/

function contarVocales(texto){
    //creamos el array de bocales 
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return texto
    .toLowerCase()
    .split('')
    .reduce((contador, letra)=>vocales.includes(letra)? contador +1 :contador, 0);
}

//prueba 

console.log(contarVocales("Actividades de orden superior"));

//nos tiene que salir 12