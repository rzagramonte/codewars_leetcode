/*
Find the Middle of the Product

Given a string of characters, create a function returning the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits and not all inputs will be string. In those cases, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is 

in:
string

TODO:
iterate over string
replace non-digit characters w ""
convert new string to array of digit chars
reduce to product in string format
return digit(s) in the middle

out:
number greater than or equal to -1

console.log(findMiddle('s7d8jd9', 0));
console.log(findMiddle('58jd9fgh/fgh6s.,sdf', 16));
console.log(findMiddle(['n', 'o', 't', ' ', 'a', ' ', 'string'], -1));
*/

const findMiddle = (str) => {
  if (!/\d+/g.test(str) || typeof str != "string" || !str) return -1;

  str = [...str.replace(/\D+/g, "")].reduce((a, c) => a * +c, 1);
  const mid = Math.floor(`${str}`.length / 2);

  return `${str}`.length % 2 ? +`${str}`[mid] : +(`${str}`[mid - 1] + `${str}`[mid]);
};
