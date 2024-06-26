/*
Is integer safe to use?

Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false

Will the parameter always be a number?
Will the return always be a boolean of true or false?

console.log(SafeInteger(9007199254740992), false);
console.log(SafeInteger(9007199254740990), true);
*/

//declare constant variable SafeInteger which will be assigned to an arrow function
//set parameter n
//is n a safe integer?
const SafeInteger = n => Number.isSafeInteger(n);