/*
Training JS #13: Number object and its properties

Task
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

Will the arguments passed into the function always be a number?
Will the return always be a string?

console.log(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
console.log(whatNumberIsIt(100),"Input number is 100");
console.log(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
console.log(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
console.log(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
console.log(whatNumberIsIt(NaN),"Input number is Number.NaN");
console.log(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");

TODO:
use switch case to shuffle through conditions and return the correct string
*/

const whatNumberIsIt = n => {
    switch (n || true) {
        case Number.MAX_VALUE: return "Input number is Number.MAX_VALUE"
        case Number.MIN_VALUE: return "Input number is Number.MIN_VALUE"
        case Number.isNaN(n): return "Input number is Number.NaN"
        case Number.NEGATIVE_INFINITY: return "Input number is Number.NEGATIVE_INFINITY"
        case Number.POSITIVE_INFINITY: return "Input number is Number.POSITIVE_INFINITY"
        default: return `Input number is ${n}`
    }
};

