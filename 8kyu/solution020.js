/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

P.R.E.P.
parameters: boolean value of true or false
return: a string of "Yes" for true and "No" for false
examples:
input: true output: "Yes"
input: false output: "No"
pseudocode:
declare function boolToWord
create parameter bool
create if else statement
use ternary operator
return appropriate string based on condition
*/

function boolToWord(bool){
    return(bool === true ? "Yes" : "No");
};

function boolToWord(bool){
    return bool ? "Yes" : "No"; //this works too because it's asking if bool is truthy return "Yes", if not then return "No"
};