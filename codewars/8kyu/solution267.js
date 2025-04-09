/*
Find the Difference in Age between Oldest and Youngest Family Members

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].


Will the parameter always be an array?
Will the elements in the input array always be numbers?
Will the numbers always be whole numbers?
Will the return always be an array?
Will the elements of the returned array always be numbers?
Will the length of the returned array always be 3?

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
*/

//declare constant variable and assign to arrow function
//create a new array using square bracket notation
//first element of the new array: the min number in the input array
//second element of the new array: the max number in the input array
//third and final element of the new array: difference between the max and min numbers of the input array
const differenceInAges = ages => [Math.min(...ages),Math.max(...ages),Math.max(...ages) - Math.min(...ages)];
