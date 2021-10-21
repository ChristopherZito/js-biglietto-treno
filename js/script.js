// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

// chiedere i chilometri da percorrere
const viaggio = prompt("Quanti chilometri devi percorrere?");
document.getElementById("km").innerHTML = `devi percorrere un viaggio di: ${viaggio} Km`;

// chiedere l'età del passeggero
const age = prompt("Quanti anni hai?");
console.log(`hai ${age} anni`);

// calcolo prezzo biglietto (0.21 € al km)
const pBase = 0.21
let prize = pBase * viaggio;
console.log(`il biglietto costa: ${prize}`);

// sconto del 20% ai minorenni(<18)    sconto del 40% agli over 65(>65)
let newPrize = prize;
if (age < 18){
    newPrize = prize - (prize * 0.2);
    document.getElementById("sconto").innerHTML = `lo sconto applicato è del 20%`
    console.log(`il biglietto scontato costa: ${newPrize}`);
} else if(age > 65) {
    newPrize = prize - (prize * 0.4) ;
    document.getElementById("sconto").innerHTML = `lo sconto applicato è del 40%`
    console.log(`il biglietto scontato costa: ${newPrize}`);
}else {
    document.getElementById("sconto").innerHTML = `Non è stato applicato nessuno sconto`
    console.log("sconto non applicato");
}

// output con 2 cifre decimali
let finalPrize = Math.round(newPrize * 100) / 100;

console.log(`arrotondato di ${finalPrize}`);
let testo1 = document.getElementById("costo");
testo1.innerHTML = ` il costo del biglietto è di: ${finalPrize} &euro;`;
