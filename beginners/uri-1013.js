/*Make a program that reads 3 integer values and present 
the greatest one followed by the message "eh o maior". 
]Use the following formula:*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Shift reads the linha line and splits when finds an space
let [A, B, C] = input.split(" ").map((item) => parseInt(item));
let maxAux = 0;
//Functions
let maxAB = (A + B + Math.abs(A - B)) / 2;
let maxXC = (C + maxAB + Math.abs(C - maxAB)) / 2;

console.log(maxXC + " eh o maior");
