//arr, func son nuestros dos argumentos
//el primero es la matriz findElement([1, 2, 3, 4],
// segundo es la función num => num % 2 === 0);
function findElement(arr, func) {
    //Creación de una variable local, que se filtra a través de la matriz agregando solo valores positvos, basado en la función introducida
    let num = arr.filter(func);
    //aquí se verifica si num, devuelve como valores verdaderos
    if (num.length > 1) {
        return num[0]; // cceder a la primera posicion 
    }
    //retorna indefinidos
    return undefined;

}


// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
//numeros pare
document.getElementById('resultado').innerHTML = findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);