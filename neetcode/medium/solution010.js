/*
Longest Repeating Character Replacement
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:
Input: s = "XYYX", k = 2
Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:
Input: s = "AAABABB", k = 1
Output: 5

Constraints:
1 <= s.length <= 1000
0 <= k <= s.length

const solution = new Solution();
console.log(solution.characterReplacement("XYYX", 2), 4);
console.log(solution.characterReplacement("AAABABB", 1), 5);
*/

//brute force solution
class Solution {
  /**
   * @param {string} s, A-Z, given string
   * @param {number} k, whole number, number of replacements
   * @return {number}, whole number, length of longest substring
   */
  characterReplacement(s, k) {
    let maxLen = 0; //length of longest substring
    let charSet = new Set(s); //create new unique set from s

    //iterate over set
    for (let char of charSet) {
      let count = 0, //count instances of s[r] = char in charSet
        l = 0; //left side of sliding window

      //right side of sliding window
      for (let r = 0; r < s.length; r++) {
        //if letter at right end = char in charSet
        if (s[r] == char) {
          count++; //increment count instances
        }
        //loop while index at right of sw - index at left sw + 1 - count of instances is > k, number of replacements
        while (r - l + 1 - count > k) {
          //if letter at left end = char in charSet
          if (s[l] == char) {
            count--; //decrement count instances
          }
          l++; //increment index at left of sw
        }

        maxLen = Math.max(maxLen, r - l + 1); //update length of longest substring to the max number between itself and r - l + 1
      }
    }
    return maxLen; //return length of longest substring
  }
}

//optimized
class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let maxLen = 0;
    let maxCount = 0;
    const freq = {}; // char -> count
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      const char = s[r];
      freq[char] = (freq[char] || 0) + 1;
      maxCount = Math.max(maxCount, freq[char]);

      // shrink window if more than k replacements needed
      while (r - l + 1 - maxCount > k) {
        freq[s[l]]--;
        l++;
      }

      maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
  }
}

