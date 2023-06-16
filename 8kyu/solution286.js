/*
Grasshopper - Combine strings

Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'

Will the parameters always be two strings?
Will the return always be one string?
Will the returned string be comprised of the two input strings with a space between them in the order received?

console.log(combineNames('James', 'Stevens'), 'James Stevens');
*/

//declare constant variable which will be assigned to an arrow function
//set parameters
//return string of n1 and n2 with a space between them
const combineNames = (n1,n2) => `${n1} ${n2}`