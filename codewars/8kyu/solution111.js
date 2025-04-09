/*
What is between?

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

P.R.E.P. 
parameter: two numbers
return: an array
examples:
input => output
(1, 4) => [1, 2, 3, 4]
(-2, 2) => [-2, -1, 0, 1, 2]
pseudocode:
declare function
set parameter
declare variable arr and assign it to an empty array
create for loop
let i = a
i < b
i++
in loop body push i into arr
*/

function between(a, b) {
    // your code here
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }