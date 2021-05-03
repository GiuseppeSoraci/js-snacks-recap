/*  SNACK 5
- Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
- Crea un nuovo array con la lista dei mammiferi
*/

const animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
    {
        nome: 'coccodrillo',
        famiglia: 'crocodilidi',
        classe: 'rettili',
    },
    {
        nome: 'falco',
        famiglia: 'falconidi',
        classe: 'uccelli',
    },
];

console.log(animali);

const mammiferi = animali.filter(element => {
    return element.classe === 'mammiferi';
});

console.log(mammiferi);