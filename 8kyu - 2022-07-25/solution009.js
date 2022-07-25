/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

P. - parameters: number / integer
R. - return: number that is a always positive integer greater than 0
E. - examples/edge cases:
summation(2) -> 3
1 + 2
summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
summation(10) -> 55
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
P. - pseudocode:
declare function or create function expression
set one parameter to pass in a number
starts at one
adds one until it hits the number passed in
returns result
*/

var summation = function (num) {
    // Code here
    let result = 0;
    for (let i = 1; i <= num; i++ ){
        result += i;
    }
    return result;
  }