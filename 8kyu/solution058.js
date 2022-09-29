/*
Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
P.R.E.P.
parameters: number
return: a product of the given number (number)
examples:
input => output 
2 => 16
3 => 27
pseudocode:
declare function
set parameter
if number is even return number times 8 else return number times 9
*/

function simpleMultiplication(number) {
    // your code........
    return number % 2 === 0 ? number * 8 : number * 9;
}
