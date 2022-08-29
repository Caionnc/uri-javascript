//Question ->

/* 
Read two integer values. After this, calculate the product between them and store the result in a variable named PROD. 
Print the result like the example below. 
Do not forget to print the end of line after the result, otherwise you will receive “Presentation Error”.

Input
The input file contains 2 integer numbers.

Output
Print the message "PROD" and PROD according to the following example, with a blank space before and after the equal signal.

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
 
 let prod = A * B;
 
 console.log("PROD = " + prod);
 