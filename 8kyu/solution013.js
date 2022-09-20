/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
P. - parameters: an array of numbers, positive or negative
R. - return: summation of all the positive numbers
E. - examples/edge cases:
[1,-4,7,12] => 1 + 7 + 12 = 20
[2,-3,8,10] => 2 + 8 + 10 = 20
P. - pseudocode:
create function declaration or assign an anon function value to a variable
pass in an array labeled as arr
setup loop to go through array of given length
if any elements are greater than or equal to 0 then return the summation of those numbers
else return 0
*/

function positiveSum(arr) {
    let total = 0;    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {                 
        total += arr[i];
      };
    };
    return total;
  };