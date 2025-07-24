/*
Pizza Payments

Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

Will the argument passed into the function always be a number? Whole or decimal?
Will the return always be a number? Whole or decimal?

console.log(michaelPays(15), 10);
console.log(michaelPays(4), 4);
console.log(michaelPays(30), 20);
console.log(michaelPays(80), 70);
console.log(michaelPays(22), 14.67);
console.log(michaelPays(5.9181), 3.95);
console.log(michaelPays(28.789), 19.19);
console.log(michaelPays(4.325), 4.33);

TODO:
if costs is less than 5 return costs
else if costs / 3 is greater than 10 return costs - 10
else return costs / 3 * 2
return w 2 decimals, if necessary
*/

const michaelPays = costs => costs < 5 ? +(costs).toFixed(2) : costs / 3 > 10 ? +(costs - 10).toFixed(2) : +(costs / 3 * 2).toFixed(2);