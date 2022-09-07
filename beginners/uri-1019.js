/*Read an integer value, which is the duration in seconds of a certain event in a factory, 
and inform it expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Shift reads the linha line and splits when finds an space
let values = input.split("\n");

let n = parseInt(input);

let hour,
  minute,
  second = parseInt(0);

if (n >= 1 && n < 60) {
    hour = 0;
    minute = 0;
    second = n;
}
if(n >= 60 && n < 3600){
    hour = 0;
    minute = n/60;
    second = n%60;
}
if (n >= 3600) {
  hour = n / 3600;

  //Minutes
  minute = (n%3600)/60;

  //Seconds
  second = (n%3600)%60;
}
if(n<=0){
    hour = 0;
    minute = 0;
    second = 0;
}

console.log(parseInt(hour) + ":" + parseInt(minute) + ":" + parseInt(second));