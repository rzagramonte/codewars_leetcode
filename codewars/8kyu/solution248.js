/*
Short Long Short

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"

Will the paramater always be two strings?
Will the return always be one string?

console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');
*/

//declare const variable and assign to arrow function
//set parameters
//is the length of a greater than the length of b? then return b+a+b, else return a+b+a
const solution = (a, b) => a.length > b.length ? b + a + b : a + b + a;