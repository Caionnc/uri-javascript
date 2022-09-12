/*Read a value of floating point with two decimal places. This represents a monetary value. 
After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. 
The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. 
Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

Input
The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

Output
Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Shift reads the linha line and splits when finds an space
let values = input.split("\n");

//Solution that URI accepts, using For Each

let n = parseFloat(input);

let bankNotes = [100, 50, 20, 10, 5, 2];
let bankCoins = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (let bankNote of bankNotes) {
  let bankNotesCounter = parseInt(n / bankNote);
  console.log(`${bankNotesCounter} nota(s) de R$ ${bankNote},00`);
  n = n % bankNote;
}

console.log("MOEDAS:");
for (let bankCoin of bankCoins) {
  let bankCoinsCounter = parseInt(n / bankCoin);
  console.log(`${bankCoinsCounter} moeda(s) de R$ ${bankCoin.toFixed(2)}`);
  n = n % bankCoin;
}
