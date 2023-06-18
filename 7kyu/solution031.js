/*
Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

Will the parameters always be two numbers?
Will the return always be a string?

console.log(addBinary(1, 1),"10");
console.log(addBinary(5, 9),"1110");
*/

//declare constant variable and and assign to arrow function
//set parameters
//return string
//add a and b
//pass in 2 into toString() as the radix
const addBinary = (a,b) => (a + b).toString(2);