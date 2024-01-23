/*
Is my function new ?

Write a function that returns whether it was called with the new operator.

The function must return a Boolean, but due to the way new works, valueOf() will be called on your returned value before strict comparison to true/false.

Examples:

wasCalledWithNew().valueOf();        // false
(new wasCalledWithNew).valueOf();    // true
wasCalledWithNew.call({}).valueOf(); // false

Will the function be called with or without the new keyword?
Will the return be a boolen of true or false?

console.log(wasCalledWithNew(), false);
console.log(new wasCalledWithNew, true);
*/

//return true or false if called with new keyword
function wasCalledWithNew() {
    return new Boolean(new.target);
  }