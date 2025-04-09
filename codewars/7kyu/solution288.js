/*
Multiply Adjacent Digits

Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

For example:

"53+5"    ->   20, which is 5 * 3 + 5
"266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
"555"     ->  125, which is 5 * 5 * 5
*/

/*
str-> - or + char in str or neither, rest of char will be nums, any num of - + in the str
num -> whole num

console.log(digitMultiplication("53+5"), 20);
console.log(digitMultiplication("266-66"), 36);
console.log(digitMultiplication("555"), 125);

split the string by either - + -> arr of strs where chars are nums
iterate through result and reduce each element to product -> arr of products
iterate over (?) and add or sub products
*/

const digitMultiplication = expr => eval([...expr].map((e,i)=>!isNaN(expr[i]) && !isNaN(expr[i+1])?`${expr[i]} *`:`${expr[i]}`).join(''));