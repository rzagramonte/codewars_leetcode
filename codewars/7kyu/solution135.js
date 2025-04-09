/*
Concatenated Sum

The number 198 has the property that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed, the result will be the original number. It turns out that 198 is the only number with this property. However, the property can be generalized so that each digit is concatenated n times and then summed.

Examples
original number =2997 , n=3
2997 = 222+999+999+777 and here each digit is concatenated three times.

original number=-2997 , n=3

-2997 = -222-999-999-777 and here each digit is concatenated three times.
Task
Write a function named checkConcatenatedSum that tests if a number has this generalized property.

Will the parameters always be two numbers?
Will the return always be a boolean of true or false?

console.log(checkConcatenatedSum(2997,3),true);
console.log(checkConcatenatedSum(-2997,3),true);
*/

/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false
*/

//declare constant variable checkConcatenatedSum which will be assigned to an arrow function
//set parameters on and n
//declare variable and spread on as a string into an array
//if on is a negative number, shift off the first element from the array
//map over array and turn each element into a number after repeating it n times
//reduce the array and return true or false if is equal to on
const checkConcatenatedSum = (on,n) => {
    let nStrArr = [...(on.toString())];
    if(Math.sign(on)==-1) nStrArr.shift();
    let repeatN = nStrArr.map(e=>+(e.repeat(n)));
    return (repeatN.reduce((a,c)=>a+c,0) === on) || (repeatN.reduce((a,c)=>a+c,0) * -1 === on);
  };