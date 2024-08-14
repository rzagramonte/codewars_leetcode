/*
Logical calculator

Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).


Will the arguments passed into the function always be an array of booleans true or false and a string of "AND", "OR", or "XOR"?
Will the return always be a boolean of true or false?

console.log(logicalCalc([true, true, true, false], "AND"), false);
console.log(logicalCalc([true, true, true, false], "OR"), true);
console.log(logicalCalc([true, true, true, false], "XOR"), true);
console.log(logicalCalc([true, true, false, false], "AND"), false);
console.log(logicalCalc([true, true, false, false], "OR"), true);
console.log(logicalCalc([true, true, false, false], "XOR"), false);
console.log(logicalCalc([true, false, false, false], "AND"), false);
console.log(logicalCalc([true, false, false, false], "OR"), true);
console.log(logicalCalc([true, false, false, false], "XOR"), true);
console.log(logicalCalc([true, true], "AND"), true);
console.log(logicalCalc([true, true], "OR"), true);
console.log(logicalCalc([true, true], "XOR"), false);
console.log(logicalCalc([false, false], "AND"), false);
console.log(logicalCalc([false, false], "OR"), false);
console.log(logicalCalc([false, false], "XOR"), false);
console.log(logicalCalc([false], "AND"), false);
console.log(logicalCalc([false], "OR"), false);
console.log(logicalCalc([false], "XOR"), false);
console.log(logicalCalc([true], "AND"), true);
console.log(logicalCalc([true], "OR"), true);
console.log(logicalCalc([true], "XOR"), true);

TODO:
create conditional statements
for "AND" return true if every element in the input arraynis true
for "OR" return true if at least one element in the input array is true
for "XOR" return true if the length of the array filtered to only include elements that are true is an odd number
else return false
*/

const logicalCalc = (array, op) => {
    if(op == "AND") return array.every(e => e == true);
    if(op == "OR") return array.some(e => e == true);
    if(op == "XOR") return array.filter(e => e == true).length % 2 != 0;
  };