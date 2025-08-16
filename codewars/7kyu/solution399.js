/*
Last

Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

Examples
last(5)               ==> 5
last([1, 2, 3, 4])    ==>  4
last("xyz")           ==> "z"
last(1, 2, 3, 4)      ==>  4
last([1, 2], [3, 4])  ==>  [3, 4]
last([[1, 2], [3, 4]])  ==>  [3, 4]

Will the argument(s) passed into the function be either string, number, or array?
Will there be 1 or more arguments?
Will the return either be string, number, or array?

console.log(last(5), 5, 'last(5)');
console.log(last("123"), "3", 'last("123")');
console.log(last([1, 2, 3]), 3, 'last([1, 2, 3])');
console.log(last([1]), 1, 'last([1])');
console.log(last([1, 2, 3, [4, 5]]), [4, 5], 'last([1, 2, 3, [4, 5]])');
console.log(last(1, 2, 3), 3, 'last(1, 2, 3)');
console.log(last('a', 'b', 'c'), 'c', "last('a', 'b', 'c')");
console.log(last([1], [2], [3]), [3], "last([1], [2], [3])");
console.log(last(1, 2, 3, [4, 5]), [4, 5], 'last(1, 2, 3, [4, 5])');

TODO:
if the length of args is 1 and it's not a number, return the last element of the first element in args
else return the last element in args
*/

const last = (...args) => args.length == 1 && typeof args[0] != "number" ? args[0][args[0].length-1] : args[args.length-1];