/*
max diff - easy

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

Will the parameter always be an array?
Will the elements in the array always numbers?
Will the numbers be integers?
Will the return always be a number?
If the length of the array is less than or equal to 1, will the return always be 0?

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);
*/

//declare constant variable which will be assigned to an arrow funciton
//set parameter
//is the length of the array less than or equal to 1? if true, return 0
//else return the difference of the max number minus the min number in the array
const maxDiff = list =>  list.length <= 1 ? 0 : Math.max(...list) - Math.min(...list);