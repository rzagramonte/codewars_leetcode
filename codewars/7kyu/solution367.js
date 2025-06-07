/*
Delta Bits

Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)

The upper limit for A and B is 216, int.MaxValue or similar.

For example, you can change 31 to 14 by flipping the 4th and 0th bit:

 31  0 0 0 1 1 1 1 1
 14  0 0 0 0 1 1 1 0
---  ---------------
bit  7 6 5 4 3 2 1 0
Thus 31 and 14 should return 2.

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(convertBits(31,14),2);
  });
});

*/

const convertBits = (a, b) => ((a ^ b).toString(2).match(/1/g) || []).length;
