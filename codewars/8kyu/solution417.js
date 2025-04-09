/*
Fuel Calculator: Total Cost

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents

Will the arguments passed into the function always be numbers?
Will the return always be a number?

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(5, 5.6), 27.50);

TODO:
find the correct discount based on number of litres
*/

const fuelPrice = (l, pricePerLitre) => +((pricePerLitre - (l > 9 ? .25 : l > 7 ? .20 : l > 5 ? .15 : l > 3 ? .10 : .05)) * l).toFixed(2);