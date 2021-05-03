/* SNACK 7
- Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
- Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.
*/

const pc = [
    {
        nome: "Acer",
        marca: "Aspire",
        hasWindows: true,
        prezzoOriginale: 1000,
        prezzoScontato: 900,
    },
    {
        nome: "HP",
        marca: "Pavilion",
        hasWindows: true,
        prezzoOriginale: 1300,
        prezzoScontato: 1000,
    },
    {
        nome: "Artic",
        marca: "KF2A",
        hasWindows: true,
        prezzoOriginale: 900,
        prezzoScontato: 700,
    },
    {
        nome: "Zenbook",
        marca: "Asus",
        hasWindows: true,
        prezzoOriginale: 2000,
        prezzoScontato: 1850,
    },
    {
        nome: "MacBook",
        marca: "Apple",
        hasWindows: false,
        prezzoOriginale: 2000,
        prezzoScontato: 1700,
    },
    {
        nome: "iMac",
        marca: "Apple",
        hasWindows: false,
        prezzoOriginale: 2500,
        prezzoScontato: 2250,
    },
];

const pcWindows = pc.filter(e => { return e.hasWindows === true }).map(e => { return { ...e, risparmio: e.prezzoOriginale - e.prezzoScontato, } })

/*
const pcWindows = [];
computers.forEach((element) => {
    if (element.hasWindows === true) {
        pcWindows.push({
            ...element,
            differenzaPrezzo: element.prezzoOriginale - element.prezzoScontato
        });
    }
});
*/

console.log(pcWindows);
