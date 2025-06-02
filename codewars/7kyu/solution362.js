/*
Powers of 3

Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

3 --> 0
4 --> 1
You may assume that the input to your function is always a positive integer.

describe("Example cases", () =>{
  Test.assertEquals(largestPower(3), 0)
  Test.assertEquals(largestPower(5), 1)
  Test.assertEquals(largestPower(7), 1)
  Test.assertEquals(largestPower(81), 3)
  Test.assertEquals(largestPower(82), 4)
});

*/

const largestPower = n =>Math.ceil(Math.log10(n)/Math.log10(3))-1;