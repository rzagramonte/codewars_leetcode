/*
Clothes size number converter

Description
You have clothes international size as text (xs, s, xxl).
Your goal is to return European number size as a number from that size.

Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.

Linearity
Base size for medium (m) is 38.
(then, small (s) is 36, and large (l) is 40)

The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.

(For sizes where x modifier makes total size negative, treat that as OK, and return negative size)

Invalid cases
Function should handle wrong/invalid sizes.

Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
Notice that you cannot apply modifier for m size, consider that case as invalid!
Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).

Invalid examples: xxx, sss, xm, other string

Valid Examples
xs: 34
s: 36
m: 38
l: 40
xl: 42

Will the argument passed into the functions always be a string?
Will the return always be a number?

console.log(sizeToNumber("s"), 36, "Small size");
console.log(sizeToNumber("m"), 38, "Medium size");
console.log(sizeToNumber("l"), 40, "Large size");
console.log(sizeToNumber("xl"), 42, "Extra large");
console.log(sizeToNumber("xs"), 34, "Extra small")
console.log(sizeToNumber("xxxs"), 30, "3-extra small");
console.log(sizeToNumber("xxxl"), 46, "3-extra large");
console.log(sizeToNumber(""), "Blank string is invalid");
console.log(sizeToNumber("xm"), "Cannot apply modifier for medium size (xm)");
console.log(sizeToNumber("xxxm"), "Cannot apply modifier for medium size (xxxm)");
console.log(sizeToNumber("xxxx"), "No base size provided (xxxx)");
console.log(sizeToNumber("ssss"), "Only one base size is allowed ('ssss')");
console.log(sizeToNumber("hello world"), "Any other text is invalid ('hello world')");
console.log(sizeToNumber("sm"), "Cannot have two bases ('sm')");
console.log(sizeToNumber("ml"), "Cannot have two bases ('ml')");
console.log(sizeToNumber("lm"), "Cannot have two bases ('lm')");

TODO:
spread string into an array
create object with sizes and their corresponding numbers
create conditionals to return the correct number or null
*/

const sizeToNumber = s => {
    s = [...s];
    const sizes = {s:36,m:38,l:40};
    if(s.length == 1) return sizes[s];
    if(s.length > 1 && !s.includes("x")) return null;
    if(s.length > 1 && s.slice(-1)=="l") return sizes[s.slice(-1)] + (s.length-1) * 2;
    if(s.length > 1 && s.slice(-1)=="s") return sizes[s.slice(-1)] - (s.length-1) * 2;
    else return null;
  };