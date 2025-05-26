/*
Basic Math (Add or Subtract)

In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

const { assert } = require('chai');

describe("Example tests", function() {
  it("calculate('1plus2plus3plus4')", function() {
    assert.strictEqual(calculate("1plus2plus3plus4"), '10');
  });
  it("calculate('1minus2minus3minus4')", function() {
    assert.strictEqual(calculate('1minus2minus3minus4'), '-8');
  });
  it("calculate('10plus20plus30minus40')", function() {
    assert.strictEqual(calculate('10plus20plus30minus40'), '20');
  });
});

*/

const calculate = str => str.split(/plus|minus/).reduce((a, b, i) => a + (i ? (str.match(/plus|minus/g)[i-1] === 'plus' ? +b : -b) : +b), 0).toString();