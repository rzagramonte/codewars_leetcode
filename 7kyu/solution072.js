/*
Tail Swap

You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

Will the parameter always be an array?
Will the elements of the input array always be two strings?
Will the two strings always be split with ":"?
Will the return always be an array of two strings with each string split by ":"?

console.log(tailSwap(['abc:123', 'cde:456']), ['abc:456', 'cde:123']);
console.log(tailSwap(['a:12345', '777:xyz']), ['a:xyz', '777:12345']);
*/

//declare constant variable which will be assigned to an arrow function
//set parameter
//split the first element in the array by ":" then access the first element in that array
//concatenate ":"
//concatenate the following
//split the second element in the input array by ":" and access the second element in the that array
//repeat the processes above for the second element and second half of the first element
const tailSwap = arr => [arr[0].split(":")[0]+":"+arr[1].split(":")[1], arr[1].split(":")[0]+":"+arr[0].split(":")[1]];