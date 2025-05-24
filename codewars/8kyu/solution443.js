/*
Up and down, the string grows

Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

For example, in Ruby, That means str.upcase.downcase.size > str.size

You should just set the value of STRANGE_STRING to meet the previous criteria.

Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.

const chai = require("chai");
const assert = chai.assert;

describe("Checking solution size", function() {
    it(`Code size should be less than 31 bytes`, function () {
        assert.isBelow(solutionLength, 31, `Solution too large, actual size: ${solutionLength}`);
    });
});

describe("Checking string length", function() {
    const upDownLen = STRANGE_STRING.toUpperCase().toLowerCase().length;
    const oriLen = STRANGE_STRING.length;

    it("String length should grow", function() {
        assert.isAbove(upDownLen, oriLen, `No grow, actual length: ${oriLen} ⇒ ${upDownLen}`);
    });
});

*/

const STRANGE_STRING ="\u0130"