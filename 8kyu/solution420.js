/*
Is the date today

Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.

Will the argument passed into the function always be a date object?
Will the return always be a boolean of true or false?

const assert = require('chai').assert;
describe("Sample tests", () => {
  const today = new Date();
  it("should return <code>true</code> for today", () => {
    let actualToday = isToday(today);
    assertNotPrinting(actualToday);
    assert.strictEqual(actualToday, true)
  });
  
  it("should return <code>false</code> for tomorrow", () => {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    assert.strictEqual(isToday(tomorrow), false);
  });
  
  it("should return <code>false</code> for yesterday", () => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    assert.strictEqual(isToday(yesterday), false);
  });
  
  function assertNotPrinting(actual) {
    assert.isDefined(actual, "You should return true or false. Did you print the answer instead?\n");
  }
});

TODO:
return true or false if date passed in is equal in value to today's date
*/

const isToday = date => date.toLocaleDateString() == new Date().toLocaleDateString();