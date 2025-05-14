/*
Coding 3min : Jumping Dutch act

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
sc(2) should return "Aa~ Pa! Aa!"

It means:

Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""

The final advice


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("<br><font size=6><b>-------- Coding 3min : Jumping Dutch act --------</b></font>", () => {
  it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
    assert.strictEqual(sc(2), "Aa~ Pa! Aa!", "good luck!");  
    assert.strictEqual(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
    assert.strictEqual(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
    assert.strictEqual(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
    assert.strictEqual(sc(1), "", "good luck!"); 
    assert.strictEqual(sc(-1), "", "good luck!"); 
  })
});

*/

function sc(floor){
  if(floor <= 1) return "";
  
  return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}