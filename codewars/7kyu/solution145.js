/*
Fruit string calculator

You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :)

Will the parameter always be a string?
Will the return always be a number?

console.log(calculate("Panda has 48 apples and loses 4"), 44);
console.log(calculate("Jerry has 34 apples and gains 6"), 40);
*/

//declare constant variable calculate which will be assigned to an arrow function
//set parameter string
//reassign string to an array of words
//if the element at the 5th index is 'loses', subtract the 2nd and 6th indexth elements, else add them
const calculate = (string) => {
    // Add your code here
    string = string.split(' ');
    return string[5] == 'loses' ? +string[2] - +string[6] : +string[2] + +string[6]
  };