/*Read four integer values named A, B, C and D. 
Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).

Input
The input file contains 4 integer values.

Output
Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, 
with a blank space before and after the equal signal. */

var input = require("fs").readFileSync("stdin", "utf8");

let values = input.split("\n");

let A = parseInt(values.shift());
let B = parseInt(values.shift());
let C = parseInt(values.shift());
let D = parseInt(values.shift());


let minus = ((A * B) - (C * D));

console.log("DIFERENCA = " + minus);
