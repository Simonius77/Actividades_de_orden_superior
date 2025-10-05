/*
Ejercicio 11
Crea una función llamada encontrarElemento que reciba:
Un array de elementos.
Una función de comparación (comparar) que recibe un elemento y devuelve true si el elemento
 cumple una condición, o false en caso contrario.
La función debe devolver el primer elemento del array que cumpla la condición definida en comparar.
Si ningún elemento la cumple, debe devolver null. Utiliza el método .find.
*/

function encontrarElemento(elementos, comparar){
    //creamos la constante elemneto donde guardaremos el primer elemento encontardo 
    const elemento = elementos.find(comparar);
    //retornaremos el elemento siempre que no sea undefined o que lo encuentre, si no retornara null
    return elemento !== undefined ? elemento : null;
}

//probamos
palabras = ["casa", "coche", "moto", "avion"];

//en la variable resultado guardamos el elemento encontrado 
let resultado = encontrarElemento(palabras, palabra => palabra ==="moto");
//mostramos resultado
console.log(resultado);