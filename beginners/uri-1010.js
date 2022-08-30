/*In this problem, the task is to read a code of a product 1, the number of units of product 1, 
the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. 
After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point. */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let values = input.split("\n");

//Shift reads the linha line and splits when finds an space

var infoLine1 = lines.shift().split(" ");
var infoLine2 = lines.shift().split(" ");

//Products 1

var product1ID = infoLine1[0];
var product1UnitsNumber = infoLine1[1];
var product1Price = infoLine1[2];

//Products 2

var product2ID = infoLine2[0];
var product2UnitsNumber = infoLine2[1];
var product2Price = infoLine2[2];

//Final Count

var bill = ((product1UnitsNumber*product1Price) + (product2UnitsNumber*product2Price));

console.log("VALOR A PAGAR: R$ " + bill.toFixed(2));




