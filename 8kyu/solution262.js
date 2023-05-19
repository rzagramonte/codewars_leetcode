/*
Swap Values
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

Will the parameter always be an array?
Will the input array always have two values?
Will the return always be an array?
Will the returned array always have the elements swapped?

var arr = [1,2]
swapValues(arr);
console.log(arr[0], 2);
console.log(arr[1], 1);
*/

//declare const variable and assign to arrow function
//set parameter
//reverse array in place returning the original array now reversed
const swapValues = arr => arr.reverse();
