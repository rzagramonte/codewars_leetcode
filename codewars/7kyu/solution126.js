/*
JavaScript Array Filter

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

Will the parameter always be an array?
Will the elements in the input array always be numbers?
Will the return always be an array?
Will the elements of the output array always be even numbers if any in the input array?

console.log(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10]);
console.log(getEvenNumbers([1,2]), [2]);
console.log(getEvenNumbers([12,14,15]), [12,14]);
console.log(getEvenNumbers([13,15]), []);
console.log(getEvenNumbers([1,3,9]), []);
*/


//declare constant variable getEvenNumbers which will be assigned to an arrow funciton
//set parameter numbersArray
//filter into new array:
//elements that return true for the negation of the element mod 2
const getEvenNumbers = numbersArray => numbersArray.filter(e=>!(e%2));