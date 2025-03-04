/*
Simple Fun #202: Min And Max

Task
You are given three integers l, d and x. Your task is:

• determine the minimal integer n 
    such that l ≤ n ≤ d, and the sum of its digits equals x.
• determine the maximal integer m 
    such that l ≤ m ≤ d, and the sum of its digits equals x.
It is guaranteed that such numbers always exist.

Input/Output
[input] integer l

[input] integer d

1 ≤ l ≤ d ≤ 10000.

[input] integer x
1 ≤ x ≤ 36

[output] an integer array
Array of two elements, where the first element is n, and the second one is m.

Example
For l = 500, d = 505, x = 10, the output should be [505, 505].

For l = 100, d = 200, x = 10, the output should be [109, 190].

Will the arguments passed into the function always be three numbers?
Will the numbers always be > 0?
Will l always be ≤ to d?
Will d always be ≤ 10000?
Will x always be ≤ 36?

TODO:
create an array with the length of d-l+1
set each element to a number from l to d inclusive
filter nums whose digits add to x
return min and max of the array in a new array

Will the return always be an array of 2 numbers?

console.log(minAndMax(500,505,10),[505, 505])
console.log(minAndMax(100,200,10),[109, 190])
console.log(minAndMax(123,456,5),[131, 410])
console.log(minAndMax(99,501,5),[104, 500])
console.log(minAndMax(99,234,1),[100, 100])
console.log(minAndMax(99,234,19),[199, 199])
console.log(minAndMax(99,5001,27),[999, 4995])
console.log(minAndMax(99,5001,28),[1999, 4996])
console.log(minAndMax(2000,7000,3),[2001, 3000])

})})
*/

const minAndMax = (l, d, x) => {
  const arr = Array.from({ length: d - l + 1 }, (e, i) => (!i ? l : l + i)).filter((e) => [...`${e}`].reduce((a, c) => a + +c, 0) == x);
  return [Math.min(...arr), Math.max(...arr)];
};