/*
Length and two values.

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!

Will the parameters always be a number and two values of any kind of data type?
Will the return always be an array?
Will the elements of the returned array be alternating of the first and second input values?

console.log(alternate(5, true, false), [true, false, true, false, true]);
console.log(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']);
console.log(alternate(0, "lemons", "apples"), []);
*/

//declare constant variable alternate which will be assigned to an arrow function
//set parameters n, firstValue, and secondValue
//create variable altArr and assign to empty array
//create for loop
//if i modulous 2 is truthy, push firstValue into altArr
//if the negation of i modulous 2 is truthy, push secondValue into altArr
//return altArr
const alternate = (n, firstValue, secondValue) => {
    let altArr = [];
    for(let i=1; i<=n; i++){
      if(i%2) altArr.push(firstValue);
      if(!(i%2)) altArr.push(secondValue);
    };
    return altArr;
};