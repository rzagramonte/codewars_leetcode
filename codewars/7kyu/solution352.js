/*
Shift Left

You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

By applying a move to the string "where", the result is the string "here".
By applying a move to the string "a", the result is an empty string "".
Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

Notes
Both strings consist of lowercase latin letters.
If the string is already empty, you cannot perform any more delete operations.

 const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(shiftLeft("test", "west"), 2);
Test.assertEquals(shiftLeft("test", "yes"), 7);
Test.assertEquals(shiftLeft("b", "ab"), 1);
  });
});

*/

const shiftLeft = (s, t, counter = 0) => {
  if(s === t) return counter;
  const params = s.length > t.length ? [s.slice(1), t] : [s, t.slice(1)];
  return shiftLeft(...params, ++counter);
};