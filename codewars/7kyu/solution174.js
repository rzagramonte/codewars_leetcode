/*
Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

Will the parameter always be a number?
Will the return always be a number?

console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
*/

//turn num to a string spread into an array
//iterate over arrays squaring each digit
//convert to string then to num
const squareDigits = num => +(Array.from(String(num),n=>n**2).join(''));