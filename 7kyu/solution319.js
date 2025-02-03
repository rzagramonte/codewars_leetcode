/*
Fix my method

I am kind of new to coding so I'm not sure what is wrong with my code.

Property objMethod should be called by myFunction.

Can you fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.

IMPORTANT: Returning just "string" is insufficient. We are required to use Object Literal Notation.

const Test = require('@codewars/test-compat');

describe("checking syntax and function integrity", function(){
  it ("should return 'string' when myFunction is called", function(){
    Test.assertEquals(myFunction().objMethod(), 'string', 'myFunction did not return "string"');
  });
});
*/

const myFunction = function () {
    function MyObject () {
      this.objProperty = "string",
      this.objMethod = function() {
        return this.objProperty;
          }
    }
    
    return new MyObject()
  };