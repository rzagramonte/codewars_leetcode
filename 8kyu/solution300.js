/*
Printing Array elements with Comma delimiters

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Will the parameter always be an array?
Will the return always be a string?

console.log(printArray([2,4,5,2]), "2,4,5,2");
*/

//declare constant variable which will be assigned to an arrow function
//set parameter
//join array elements into a string using "," in between each element
const printArray = array => array.join(',');