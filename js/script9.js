/* SNACK 9
- Un oggetto rappresenta una finestra di un browser e contiene due campi: 
1) un array di tab aperte
2) un numero che indica l'indice della tab aperta nell'array:
{
   "tab": ["Facebook", "GitHub", "Gmail"],
   "activeTab": 0
}
- Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab. Nel caso la tab fosse attiva, deve attivare la successiva.
*/


const obj =
{
    tabOpen: ["Facebook", "GitHub", "Gmail"],
    activeTab: 0,
};

obj.tabOpen.splice(obj.activeTab, 1)
obj.activeTab++;

console.log(obj);
console.log(obj.activeTab);



