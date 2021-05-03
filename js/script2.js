/* SNACK 2
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
*/

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);

console.log(numbers);
console.log(squaredNumbers);

// VERSIONE FOREACH
const potenze = [];
numbers.forEach((number) => {
    potenze.push(number * number);
})

console.log(numbers);
console.log(squaredNumbers);
console.log(potenze);