// Convert a Number to a String!
// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"
function numberToString(num) {
    // Return a string of the number here!
    let str = num.toString();
    return str
  }
// Sample Test
const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
