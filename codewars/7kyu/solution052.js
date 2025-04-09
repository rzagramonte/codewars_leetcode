/*
Vampire Numbers

Vampire Numbers
Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.


Will the parameters always be two numbers?
Will the return always be a boolean of true or false?

console.log(vampireTest(21,6), true);
console.log(vampireTest(204,615) , true);
console.log(vampireTest(30,-51) , true);
console.log(vampireTest(-246,-510) , false);
console.log(vampireTest(2947050,8469153) , true);
console.log(vampireTest(2947051,8469153) , false);
*/

//declare a constant variable which will be assigned to an arrow function
//set parameters
//converted a and b to strings, concatenated them, split them, sorted the elements, and joined it back to a string
//converted the product to a string, split to an array, sorted, joined back to a string
//if these two equal in value, return true else return false
const vampireTest = (a, b) => (a.toString() + b.toString()).split('').sort().join('') == (a*b).toString().split('').sort().join('');