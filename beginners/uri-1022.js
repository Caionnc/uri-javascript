/*Read 4 integer values A, B, C and D. 
Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even,
 write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).

Input
Four integer numbers A, B, C and D.

Output
Show the corresponding message after the validation of the values​​. */

var input = require("fs").readFileSync("stdin", "utf8");
/*var lines = input.split(" ");

MEU CODIGO ->

let [A, B, C, D] = input.split(" ").map((item) => parseInt(item));

console.log(A + " " + B + " " + C + " " + D + " ");

if (((B > C) && (D > A) && ((C+D) > (A+B)) && (C > 0) && (D > 0) && (A % 2 == 0))) {
  console.log("Valores nao aceitos");
} else {
  console.log("Valores aceitos");
} */


var lines = input.split('\n');

var line = lines.shift().split(" ");
var A = parseInt(line[0]);
var B = parseInt(line[1]);
var C = parseInt(line[2]);
var D = parseInt(line[3]);

if ((B > C) && (D > A) && ((C+D) > (A+B)) && (C > 0) && (D > 0) && (A % 2 == 0)) console.log('Valores aceitos'); 
else console.log('Valores nao aceitos');
