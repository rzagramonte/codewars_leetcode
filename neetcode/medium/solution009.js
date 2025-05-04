/*
Longest Substring Without Repeating Characters
Solved 
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
Constraints:

0 <= s.length <= 1000
s may consist of printable ASCII characters.
*/

class Solution {
  /**
   * @param {string} s
   * @return {number}
   * check to see if s[i] != s[i-1]
   * if so, update count
   * update max to Math.max(count, max)
   */
  lengthOfLongestSubstring(s) {
    let set = new Set();
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
      while (set.has(s[end])) {
        set.delete(s[start]);
        start++;
      }
      set.add(s[end]);
      maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
  }
}
