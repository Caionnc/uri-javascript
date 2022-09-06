/*In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. 
The possible banknotes are 100, 50, 20, 10, 5, 2 e 1. Print the read value and the list of banknotes.

Input
The input file contains an integer value N (0 < N < 1000000).

Output
Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. 
Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Shift reads the linha line and splits when finds an space
let values = input.split("\n");

var n = parseInt(values.shift());

//BANKNOTES ->

let bankNotes = [100, 50, 20, 10, 5, 2, 1];

let bankNotesCounter = [0, 0, 0, 0, 0, 0, 0].map((item) => parseInt(item));

for (let i = 0; i < bankNotes.length; i++) {
  bankNotesCounter[i] = parseInt(n / bankNotes[i]);
  n = n - bankNotesCounter[i]*bankNotes[i];

  console.log(bankNotesCounter[i] + " nota(s) de R$ " + bankNotes[i].toFixed(2));

}

/*hundredNotes {
    counter = 0
  },
  fiftyNotes,
  twentyNotes,
  tenNotes,
  fiveNotes,
  twoNotes,
  oneNotes, */
