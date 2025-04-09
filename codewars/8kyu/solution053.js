/*
You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

Will the parameters always be an array and a string or number?
Will the return always be a boolean of true or false?

console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
*/

//declare variable and assign to arrow function
//set parameters
//return true or false if array includes specified element
const check = (a, x) => a.includes(x);