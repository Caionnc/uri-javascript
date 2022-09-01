/*Make a program that reads 3 integer values and present 
the greatest one followed by the message "eh o maior". 
]Use the following formula:*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let values = input.split("\n");

//Shift reads the linha line and splits when finds an space
let [A, B, C] = input.split(" ").map((item) => parseInt(item));
let maxAux = 0;
//Functions
if(A>B && A>C){
    maxAux = A;
}else if(B>A && B>C){
    maxAux = B;
}else{
    maxAux = C;
}

console.log(maxAux +" eh o maior");

