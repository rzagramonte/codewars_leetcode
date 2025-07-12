/*
RaNDoM CAsE

Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:

randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
Notes:

This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.

The letters MUST be selected randomly - filters are set to make sure there is no cheating!

const assert = require('chai').assert;

describe("Tests", () => {
  it("test", () => {
    let v = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Donec eleifend cursus lobortis",
      "THIS IS AN ALL CAPS STRING",
      "this is an all lower string"
    ];

    for(let i in v) {
      let r = randomCase(v[i]);
      assert.isString(r);
      assert.strictEqual(r.toLowerCase(), v[i].toLowerCase());
      assert.notStrictEqual(r, v[i]);
      assert.notStrictEqual(r, v[i].toUpperCase());
      assert.notStrictEqual(r, v[i].toLowerCase());
    }
  });
});

*/

const randomCase = (x) => {
  let result = "";
  for (const char of x) {
    Math.ceil(Math.random() * 2) == 1 ? (result += char.toLowerCase()) : (result += char.toUpperCase());
  }
  return result;
};
