/*
Parse nice int from char problem

You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
P.R.E.P.
parameters: a string
return: a number
example:
input => output
"1 year old" => 1
"5 years old" => 5
pseudocode:
declare function
set parameter
return the first element in the string with inputString[0] and coerce it into a number with Number()
*/

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :)
      
      return Number(inputString[0]);
    }