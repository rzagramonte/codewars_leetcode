/*
Calculate Price Excluding VAT

Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1

Will the parameter always be a number?
Will the return always be a number rounded to 2 decimal places?

console.log(excludingVatPrice(230), 200.00);
console.log(excludingVatPrice(123), 106.96);
*/

//return price without vat
//declare function and set parameter
function excludingVatPrice(price){
    // your code
    //use return keyword and ternary/conditional operator
    //if price is equal in value and type to null, then return -1
    //else return price divided by 1.15
    //return this as a number and rounded to two decimal points using the number command and the toFixed() method
    return price === null ? -1 : Number((price / (1.15)).toFixed(2));
  }

//refactord code:
//return price without vat
//if price is null, then return -1
//else return price divided by 1.15 rounded to two decimal places
const excludingVatPrice = price => price === null ? -1 : +(price / 1.15).toFixed(2);