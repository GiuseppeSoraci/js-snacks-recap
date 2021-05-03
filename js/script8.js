// SNACK 8
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

const stringArray = ['pippo', 'PLUTO', 'PaperIno'];

const formatString = stringArray.map(el => `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`);
console.log(formatString);


