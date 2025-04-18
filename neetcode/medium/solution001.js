/*
Group Anagrams
Solved 
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:
Input: strs = ["x"]
Output: [["x"]]

Example 3:
Input: strs = [""]
Output: [[""]]

Constraints:
1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.

TODO:
create an object to be used as a hash
iterate over array of strings
for each string create a unique key
if the key is found in the hash, push the string into its array
else create a new key and assign it to the string in an array
*/

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {};

        for (const str of strs) {

            const keyString = [...str].reduce((acc, char) => {
                acc[char.charCodeAt(0) - 97]++;
                return acc;
            }, new Array(26).fill(0)).join();
            
            if (keyString in hash) hash[keyString].push(str);
            else hash[keyString] = [str];
        }

    return Object.values(hash);
}

}
