/*
Is this my tail?

Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.


Will the parameter always be two strings?
Will the return always be a boolean of true or false?

console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);
*/

//declare const variable and assignt to arrow function
//set parameters
//does bod end with tail? return true or false
const correctTail = (bod, tail) => bod.endsWith(tail);