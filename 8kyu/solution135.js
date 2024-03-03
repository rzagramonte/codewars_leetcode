/*
Pythagorean Triple

Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:

c2 = a2 + b2
where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

Return Values
1 if a, b and c form a pythagorean triple
0 if a, b and c do not form a pythagorean triple
For Python: return True or False
For JavaScript: return true or false

Will the parameter always be an array of non-negative integers containing 3 numbers?
Will the return always be true or false?
console.log(isPythagoreanTriple([3, 4, 5]), true)
console.log(isPythagoreanTriple([3, 5, 9]), false)
*/

function isPythagoreanTriple(integers) {
  // Good luck friends!
  //declare variable sortedIntegers and assign it to integers appended to the sort function using dot notation; pass in the method the following arrow function (a,b) => a - b
  let sortedIntegers = integers.sort((a, b) => a - b);
  //declare variable a and assign it to the first element of the integers array
  let a = sortedIntegers[0];
  //declare variable b and assign it to the second element of the integers array
  let b = sortedIntegers[1];
  //declare variable c and assign it to the third element of the integers array
  let c = sortedIntegers[2];
  //if c to the power of 2 equals in value to a to the power of 2 plus b to the power of 2
    if(c**2 == a**2 + b**2){
        //return the boolean of true
        return true;
    }else{//return the boolean of false
        return false;
    };
  }

//refactored code:
const isPythagoreanTriple = integers => {
  integers = integers.sort((a, b) => a - b);
  let a = integers[0];
  let b = integers[1];
  let c = integers[2];
  return c**2 == a**2 + b**2
};