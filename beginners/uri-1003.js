//Question ->

/* TRead two integer values, in this case, the variables A and B. After this, calculate the sum between them and assign it to the variable SOMA. 
Write the value of this variable.

Input
The input file contains 2 integer numbers.

Output
Print the message "SOMA" with all the capital letters, with a blank space before and after the equal signal followed by the corresponding value to the sum of A and B. 
Like all the problems, don't forget to print the end of line, otherwise you will receive "Presentation Error"

 Input Samples: 30
                10
 Output SOMA = 40
 
 Input :-30
         10
 Output: SOMA = -20
 
 Input : 0
         0
 Output: SOMA = 0*/

var input = require("fs").readFileSync("stdin", "utf8");
let values = input.split("\n");

let A = parseInt(values.shift());
let B = parseInt(values.shift());

let sum = A + B;

console.log("SOMA = " + sum);
