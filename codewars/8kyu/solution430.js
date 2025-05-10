/*
Generate user links

Generate user links
Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
reference
use this as a reference encoding

const { assert } = require('chai');

describe('Example tests', () => {
  describe('Fixed Tests', () => {
    it("Basic Tests", () => {
      assert.strictEqual(generateLink('matt c'),'http://www.codewars.com/users/matt%20c');
      assert.strictEqual(generateLink('g964'),'http://www.codewars.com/users/g964');
      assert.strictEqual(generateLink('GiacomoSorbi'),'http://www.codewars.com/users/GiacomoSorbi');
      assert.strictEqual(generateLink('ZozoFouchtra'),'http://www.codewars.com/users/ZozoFouchtra');
      assert.strictEqual(generateLink('colbydauph'),'http://www.codewars.com/users/colbydauph');
    });
  });
});

*/

const generateLink = user => `http://www.codewars.com/users/${encodeURIComponent(user)}`;