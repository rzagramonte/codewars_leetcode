/*
Sort the Gift Code

Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

Will the argument passed into the function's parameter always be a string?
Will the return always be a string?

console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba');

spread string into an array
sort
join element back into one string
*/

const sortGiftCode = code => [...code].sort().join('');