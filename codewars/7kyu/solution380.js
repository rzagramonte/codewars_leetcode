/*
Calculate Two People's Individual Ages

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

Will the arguments always be two integers and/or floating point numbers?
Will the return always be an array of two numbers or null?

console.log(getAges(24, 4), [14, 10]);
console.log(getAges(30, 6), [18, 12]);
console.log(getAges(70, 10), [40, 30]);
console.log(getAges(18, 4), [11, 7]);
console.log(getAges(63, 14), [38.5, 24.5]);
console.log(getAges(80, 80), [80, 0]);
console.log(getAges(63, -14), null);
console.log(getAges(-22, 15), null);

TODO:
find a
find b
return null or [a,b]
*/

const getAges = (sum, difference) => {
  let b = (sum - difference) / 2;
  let a = b + difference;
  return sum < 0 || difference < 0 || a < 0 || b < 0 ? null : [a, b];
};
