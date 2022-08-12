/*
Array plus array

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

P.R.E.P.
parameters: two arrays
return: the combination of two arrays into one
examples:
input => output
[2,3,1],[64,53,6,5,4,3] => 141
pseudocode:
declare function
set parameters
use reduce method on both arrays then add reduced values of both
*/

function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((acc,c)=>acc+c,0);
    let sum2 = arr2.reduce((acc,c)=>acc+c,0);
    return sum1 + sum2;
  }