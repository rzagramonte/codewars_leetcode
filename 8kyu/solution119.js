/*
Training JS #6: Basic data types--Boolean and conditional statements if..else

Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

P.R.E.P.
parameter(s): numbers and symbols
return: a string
examples:
(a>b) =>"false"
(a===b) =>"false"
(a<b) =>"true"
(a!==b) =>"true"
(b>c) =>"true"
(b===c) =>"false"
(b<c) =>"false"
(b!==c) =>"true"
(a===c) =>"true"
(a!==c) =>"false"
pseudocode:
declare function
set parameter(s)
create if else statement
if val is truthy return 'true' else return 'false'
*/

function trueOrFalse(val){
    if (val){
      return 'true';
    }else{
      return 'false';
    };
}