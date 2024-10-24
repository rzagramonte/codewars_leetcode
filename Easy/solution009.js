/*
Jewels and Stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
 
Constraints:
1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

/*
Will the arguments passed into the function always be strings? Yes - 2 strings passed in
Will the function be sensitive to capitalization in the string? Yes, for both strings
Will the strings contain any characters? No, only (A-Z) and/or (a-z)
Will either the strings ever be empty? Yes, the stones string
Will the jewels string always have unique characters? Yes
Will the return always be a number? Yes
Will the number ever be less than 0? No
Will the number returned always be a positive whole number? Yes

TODO:
transform jewels to a set
filter from stones all of jewels and return the length
*/

const numJewelsInStones = (jewels, stones) => {
    jewels = new Set(jewels);
    return [...stones].filter(e=>jewels.has(e)).length;
};

console.log(getNumJewels("aA", "aAAbbbb"), 3);
console.log(getNumJewels("z", "ZZ"), 0);
console.log(getNumJewels());