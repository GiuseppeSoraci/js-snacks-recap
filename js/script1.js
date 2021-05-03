/* SNACK 1
- Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà: Età / Media punti fatti per partita / Percentuale di successo per tiri da 3 punti / Codicec giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole: l'età deve essere compresa tra 18 e 40 / La media punti fatti per partita deve essere compresa tra 0 e 50 / La percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100 / Il codice giocatore deve essere formato da 3 lettere maiuscole casuali (Array di lettere) e 3 cifre casuali 
Stampare poi il codice giocatore, media punti e percentuale tiri da 3 punti
- Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore
- Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e la percentuale di successo per i tiri da 3 punti superiore al 50%
*/

const maxAge = 40;
const minAge = 18;
const maxPoints = 50;
const minPoints = 0;
const maxPercPoints = 100;
const minPercPoints = 0;

const basketPlayer = {
    age: getRandomNumber(maxAge, minAge),
    averagePoints: getRandomNumber(maxPoints, minPoints),
    succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
    playerCode: genPlayerCode(),
};

console.log(basketPlayer);

console.log(`Player Code:${basketPlayer.playerCode}, Average Points:${basketPlayer.averagePoints}`);

const basketTeam = [
    basketPlayer1 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer2 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer3 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer4 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer5 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer6 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer7 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer8 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer9 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
    basketPlayer10 = {
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    },
];

console.log(basketTeam);

const giocatori = [];

for (let i = 0; i < 10; i++) {
    giocatori.push({
        age: getRandomNumber(maxAge, minAge),
        averagePoints: getRandomNumber(maxPoints, minPoints),
        succesPoints: getRandomNumber(maxPercPoints, minPercPoints),
        playerCode: genPlayerCode(),
    });
}
console.table(giocatori);

giocatori.forEach((giocatore) => {
    console.log(`Codice giocatore:${giocatore.playerCode} | Media punti:${giocatore.averagePoints}`);
});

const bestPlayer = basketTeam.filter((element) => {
    return element.averagePoints > 25 && element.succesPoints > 50;
});
console.log(bestPlayer);

// FUNCTIONS 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genPlayerCode() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    let chars = '';
    let numbers = '';

    for (let i = 0; i < 3; i++) {
        chars += letters[getRandomNumber(0, letters.length - 1)];

        numbers += getRandomNumber(0, 9);
    }

    return chars + numbers;
}