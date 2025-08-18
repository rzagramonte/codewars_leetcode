/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

Will the argument passed into the function always be a string?
Will the return always be a number?

console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome("aa"), 2);
console.log(longestPalindrome("baa"), 2);
console.log(longestPalindrome("aab"), 2);
console.log(longestPalindrome("zyabyz"), 1);
console.log(longestPalindrome("BaaBcd"), 4);
console.log(longestPalindrome("baablkj12345432133d"), 9);    
console.log(longestPalindrome(""), 0);
console.log(longestPalindrome("Aa"), 1);

if s is an empty string, return 0
create variable to save max length to return, set at 0
create function that expands from center
loop through string to expand from each index
return max length
*/

const longestPalindrome = s => {
  if (!s.length) return 0;

  let maxLen = 0;

  function expandFromCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currLen = right - left + 1;
      if (currLen > maxLen) {
        maxLen = currLen;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandFromCenter(i, i); // odd s
    expandFromCenter(i, i + 1); // even s
  }

  return maxLen;
};
