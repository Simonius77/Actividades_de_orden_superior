/*Ejercicio 6
Escribe una función invertirCadena que tome un string y devuelva el mismo string 
con las palabras en orden inverso. Utiliza .reduce para resolver este problema.*/

function invertirCadena(string){
    return string
    // separa la frases por palabras 
    .split(" ")
    // lee cada palabra y la coloca al inicio 
    .reduce((i, palabra)=> [palabra, ...i], [])
    //une nuevamente las palabras con los espacios
    .join(" ");

}
console.log(invertirCadena("Aprender programacion para trabajar"));