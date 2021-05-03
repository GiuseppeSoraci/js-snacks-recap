/*  SNACK 10
- Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
- Andiamo a stampare nome cognome e numero dentro una lista.
- Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero.
- Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero.
*/

const app = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                name: "Alberto",
                surname: "Sordi",
                number: 3429424203,
                active: true,
            },

            {
                name: "Gino",
                surname: "Rossi",
                number: 4482939232,
                active: false,
            },

            {
                name: "Paul",
                surname: "Debussy",
                number: 332343245,
                active: true,
            },

            {
                name: "Martina",
                surname: "Troisi",
                number: 434239043,
                active: false,
            },
        ],
    },
    methods: {
        showSurname(index) {
            console.log(this.contacts[index].surname);

        }
    }

});







