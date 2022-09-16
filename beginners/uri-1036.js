/*Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. 
If it's impossible to calculate the roots because a division by zero or a square root of a negative number, 
presents the message “Impossivel calcular”.

Input
Read 3 floating-point numbers (double) A, B and C.

Output
Print the result with 5 digits after the decimal point or the message if it is impossible to calculate. */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = input.split(" ").map((item) => parseFloat(item));

function bhaskaraFormula(a, b, c) {
  let R1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  let R2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

  if (!R1 || !R2) {
    return console.log("Impossivel calcular");
  } else {
    return console.log(
      "R1 = " + R1.toFixed(5) + "\n" + "R2 = " + R2.toFixed(5)
    );
  }
}

bhaskaraFormula(a, b, c);
