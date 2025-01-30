/*
Convert Integer to Binary

Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form. To get an idea about how to convert a decimal number into a binary number, visit here.

Notes: negative numbers should be handled as two's complement; assume all numbers are integers stored using 4 bytes (or 32 bits) in any language.

Your output should ignore leading 0s.

Examples (input --> output):
3  --> "11"
-3 -->"11111111111111111111111111111101"
Be Ready for Large Numbers. Happy Coding ^_^

Will the argument passed into the function always be an integer?
Will the return always be a string?

console.log(toBinary(2),"10")
console.log(toBinary(3),"11")
console.log(toBinary(-3),"11111111111111111111111111111101")
console.log(toBinary(4),"100")
console.log(toBinary(5),"101")

turn input number to bits and return as a string
*/

const toBinary = n => (n >>> 0).toString(2);