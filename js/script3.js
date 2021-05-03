/* SNACK 3
Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, 
sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". 
Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata.
*/

const brands = [
    {
        name: 'Gucci'
    },
    {
        name: 'Apple'
    },
    {
        name: 'Samsung'
    },
    {
        name: 'LG'
    },
    {
        name: 'Gucci'
    },
    {
        name: 'Fendi'
    },
    {
        name: 'Acer'
    },
    {
        name: 'Ferragamo'
    },
    {
        name: 'Ferrari'
    },
    {
        name: 'Ducati'
    },
]

const brand = brands.map((element) => {
    return {
        name: element.name.toLowerCase(),
        foundationYear: randomNumber(1900, 2000)
    }
})

// FUNCTION
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(brand)
