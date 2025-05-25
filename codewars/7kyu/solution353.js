/*
Simple Fun #50: Array Conversion

Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. 
iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. 
iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

Example
For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

Input/Output
[input] integer array arr

Constraints: 21 ≤ arr.length ≤ 25, -9 ≤ arr[i] ≤ 99.

[output] an integer

const { assert, config } = require('chai')
config.truncateThreshold = 0

describe('Basic Tests', function () {
  it('It should work for basic tests.', function () {
    assert.strictEqual(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]), 186, 'arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]),')
    assert.strictEqual(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 64, 'arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])')
    assert.strictEqual(arrayConversion([3, 3, 5, 5]), 60, 'arrayConversion([3, 3, 5, 5])')
  })
})
*/

const arrayConversion = d => d.slice(~Math.log2(d.length)+1).reduce((a,k,i) => a.slice(-a.length/2).map((_,j) => (k=j*2,i%2) ? a[k]*a[k+1] : a[k]+a[k+1]), d)[0];