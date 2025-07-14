/*
Previous multiple of three

Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9

const chai = require("chai");
const assert = chai.assert;

describe("Basic tests", function() {
  const answer = [null, null, 36, 12, 9] ;
  [1, 25, 36, 1244, 952406].forEach((q, i) =>
    it(`n = ${q}`, function() {
      assert.strictEqual( prevMultOfThree(q), answer[i] );
    }));
  });
*/
const prevMultOfThree = (n) => {
  n = n.toString();
  for (let i = n.length - 1; i >= 0; i--) {
    if (!(n.slice(0, i + 1) % 3)) return +n.slice(0, i + 1);
  }
  return null;
};
