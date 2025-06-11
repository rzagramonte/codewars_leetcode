/*
Dot Calculator

You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""

describe("Test suite", function () {
	it("sample tests", function () {
		doTest("..... + ...............", "....................");
		doTest("..... - ...", "..");
		doTest("..... - .", "....");
		doTest("..... * ...", "...............");
		doTest("..... * ..", "..........");
		doTest("..... // ..", "..");
		doTest("..... // .", ".....");
		doTest(". // ..", "");
		doTest(". - .", "");
	});

    const chai = require('chai'), { assert } = chai;
    chai.config.truncateThreshold = 0;

    function doTest (string, expected) {
        const actual = dotCalculator(string);
        assert.strictEqual(actual, expected, `for string:\n"${string}"\n`);
    }
});
*/

const dotCalculator = (equation) => {
  const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(' ');
  return '.'.repeat(operations[operator](left.length, right.length));
}