/*
Understanding closures - the basics

This is a simple exercise to understand the feature in the javascript language called closure.

The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.

Will the argument passed into the function always be a number?
Will the return always be the numbers from 0 to n?

const { assert } = require('chai');

describe('Submission tests', () => {
  it("Basic tests", () => {
    for(let i = 0; i< 10; i++){
      assert.strictEqual(buildFun(10)[i](), i);
    }

    for(let i = 0; i< 20; i++){
      assert.strictEqual(buildFun(20)[i](), i);
    }
  });

  it("Random tests", () => {
    for (let i=0;i<40;i++){
      let n = ~~(Math.random()*10);
      for (let j = 0; j < n; j++){
        assert.strictEqual(buildFun(n)[j](),j);
      }
    }
  });
});

TODO:
fix closure to return i instead of console.log(i)
*/

const buildFun = (n) => {
  let res = [];
  for (let i = 0; i < n; i++) res.push(() => i);
  return res;
};
