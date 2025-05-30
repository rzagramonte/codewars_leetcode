/*
Minimum Percentage of Visitors that Ate All Foods

Input
An (array, list, tuple, or vector) of numbers (with length from 1 to 10 inclusive).
Each number represents the percentage (from 0 to 100 inclusive) of visitors that ate a particular food item.

Output
The minimum percentage of visitors that must have eaten all foods.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("minimumPercentage", function() {
  it("Sample Tests", function() {
    assert.deepEqual(minimumPercentage([76]),              76.0)
    assert.deepEqual(minimumPercentage([50, 100]),         50.0)
    assert.deepEqual(minimumPercentage([50, 50]),           0.0)
    assert.deepEqual(minimumPercentage([100, 100, 100]),  100.0)
    assert.deepEqual(minimumPercentage([65, 80, 80, 90]),  15.0)
  });
});
*/

const minimumPercentage = foods => Math.max(0, foods.reduce((a, p) => a + p - 100, 100));