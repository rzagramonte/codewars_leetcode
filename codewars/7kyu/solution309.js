/*
Ordering the words!

Description:
Given a string, you need to write a method that order every letter in this string in ascending order.

Also, you should validate that the given string is not empty or null. If so, the method should return:

"Invalid String!"
Notes
• the given string can be lowercase and uppercase.
• the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
Examples
"hello world" => " dehllloorw"
"bobby"       => "bbboy"
""            => "Invalid String!"
"!Hi You!"    => " !!HYiou"
Good luck! Hope you enjoy it


console.log(orderWord("Hello, World!"), " !,HWdellloor");
console.log(orderWord("bobby"), "bbboy");
console.log(orderWord("b"), "b");
console.log(orderWord(""), "Invalid String!");
console.log(orderWord("completesolution"), "ceeillmnooopsttu");
console.log(orderWord("\"][@!$*(^&%"), "!\"$%&(*@[]^");
console.log(orderWord("i\"d][@z!$r(^a&world%"),"!\"$%&(@[]^addilorrwz");
console.log(orderWord(null),"Invalid String!");
console.log(orderWord("cba"),"abc");
console.log(orderWord("abc"),"abc");

Will the argument passed into the function always be a string?
Will the return always be a string?

spread string into an array
sort the array
join elements of array into one string
if input string is falsy return 'Invalid String!'
*/

const orderWord = s => s ? [...s].sort().join('') : 'Invalid String!';