/*
Summing a number's digits
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

Will the parameter always be a number as a whole number, positive or negative?
Will the return always be a number?

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
*/

//declare variable and assign it to arrow function
const sumDigits = number => {
    //declare variable and assign it to the absolute value of number using Math.abs and passing in number as the argument
    let absNum = Math.abs(number);
    //declare variable and assign it to number converted to string
    let toString = absNum.toString();
    //declare variable and assign it to an array where the elements are each character in the string
    let splitString = toString.split('');
    //declare a variable and assign it to a new array using the map method; will return an array of all strings converted to a number
    let toNum = splitString.map(element => Number(element));
    //return one value after using the reduce method which will add together all the number in the array
    return toNum.reduce((a,c)=>a+c,0);
};

//OR

//all the methods can be chained together using dot notation
const sumDigits2 = number => Math.abs(number).toString().split('').reduce((a,c)=>+a + +c,0);