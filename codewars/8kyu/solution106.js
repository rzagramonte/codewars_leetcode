/*
All Star Code Challenge #18

This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1

P.R.E.P.
parameters: two strings
return: a number
examples:
input => output
('Hello', 'o') => 1
('Hello', 'l') => 2
('', 'z') => 0
pseudocode:
declare function strCount
set parameters str and letter
declare variable count and assign it to 0
create for loop to iterate over str
let i = 0
i < str.length
i++
in body of for loop:
if str[i] equals in value to letter then add 1 to count and reassign its value
return count
*/

function strCount(str, letter){  
    //code here
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] == letter){
        count += 1;
      }
    }
    return count;
  }