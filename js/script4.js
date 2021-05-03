/* SNACK 4
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "benzina",
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "benzina",
    },
    {
        marca: "audi",
        modello: "a3",
        alimentazione: "diesel",
    },
    {
        marca: "porsche",
        modello: "panamera",
        alimentazione: "benzina",
    },
    {
        marca: "fiat",
        modello: "600",
        alimentazione: "diesel",
    },
    {
        marca: "ford",
        modello: "fiesta",
        alimentazione: "metano",
    },
    {
        marca: "ford",
        modello: "focus",
        alimentazione: "gpl",
    },
    {
        marca: "renault",
        modello: "clio",
        alimentazione: "gpl",
    },
    {
        marca: "toyota",
        modello: "yaris",
        alimentazione: "elettrico",
    },
    {
        marca: "citroën",
        modello: "c3",
        alimentazione: "elettrico",
    },
]

const carsBenzina = cars.filter( (element) => {
    return element.alimentazione === 'benzina'
})

const carsDiesel = cars.filter( (element) => {
    return element.alimentazione === 'diesel'
})

const carsOther = cars.filter( (element) => {
    return element.alimentazione !== 'benzina' && element.alimentazione !== 'diesel'
})

console.log(cars);
console.log(carsBenzina);
console.log(carsDiesel);
console.log(carsOther)
