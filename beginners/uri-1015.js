/*Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) 
and calculate the distance between them, showing four decimal places after the comma, 
according to the formula:

Distance = 

Input
The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Shift reads the linha line and splits when finds an space
let values = input.split("\n");

//Functions
let [x1, y1] = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item));

let [x2, y2] = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item));

distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distance.toFixed(4));
