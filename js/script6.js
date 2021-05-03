/* SNACK 6
- Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
- Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const persone = [
    {
        nome: 'Paolo',
        cognome: 'Cracco',
        eta: 45
    },
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 17
    },
    {
        nome: 'Francesco',
        cognome: 'Verdi',
        eta: 87
    },
    {
        nome: 'Paolo',
        cognome: 'Duzioni',
        eta: 25
    },
    {
        nome: 'Sofia',
        cognome: 'Moro',
        eta: 13
    },
    {
        nome: 'Mirko',
        cognome: 'Mirici',
        eta: 14
    },
    {
        nome: 'Stefano',
        cognome: 'Totti',
        eta: 5
    },
    {
        nome: 'Davide',
        cognome: 'Orlandi',
        eta: 46
    },
];

const maggiorenni = persone.map((persona) => {
    if (persona.eta >= 18) {
        return `${persona.nome} ${persona.cognome} può guidare`
    }
    return `${persona.nome} ${persona.cognome} non può guidare`
})
console.log(maggiorenni);