/*Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

Input
The input file contains 1 integer value.

Output
Print the output, like the following example.*/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

//Shift reads the linha line and splits when finds an space
let values = input.split("\n");

let n = parseInt(input);

let years,
  months,
  days = parseInt(0);

if (n >= 1 && n < 30) {
  years = 0;
  months = 0;
  days = n;
}
if (n >= 30 && n < 365) {
  years = 0;
  months = n / 30;
  days = n % 30;
}
if (n >= 365) {
  years = n / 365;

  //Minutes
  months = (n % 365) / 30;

  //Seconds
  days = (n % 365) % 30;
}
if (n <= 0) {
  years = 0;
  months = 0;
  second = 0;
}

console.log(
  parseInt(years) +
    " ano(s)\n" +
    parseInt(months) +
    " mes(es)\n" +
    parseInt(days) +
    " dia(s)"
);
