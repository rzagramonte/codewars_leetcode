/*
Recycle!

You are having a BBQ, and after the BBQ you are left with some rubbish to recycle.

There are 3 recycling boxes: Red: Plastic, Green: Glass, Blue: Card.

You want to sort the rubbish according to the material and return the number of items in each box as an array (or a tuple in Python):

[plastic, glass, card]
The material type can be determined based on the sign of the item's value:

Plastic: value > 0
Glass: value < 0
Card: value = 0
Example
rubbish = [5, -9, 0, 6, -84, -95, 15]
// Plastic = 3, Glass = 3, Card = 1
// Output: [3, 3, 1]

Will the argument passed into the function always be an array of numbers?
Will the return always be an array of 3 numbers?

console.log(recycleMe([5,-9,0,6,-84,-95,15]),[3,3,1]);
console.log(recycleMe([45,-26,-4,-66,-84,-38,14]),[2,5,0]);

TODO:
create variable to contain object of plastic, glass, and card keyes set to 0
iterate over the input array
if number is > 0, add 1 to plastic
if number is < 0, add 1 to glass
if number is 0, add 1 to card
return the values of the object in an array
*/

const recycleMe = (recycle) => {
  const bins = {
    plastic: 0,
    glass: 0,
    card: 0,
  };

  for (const item of recycle) {
    if (item > 0) bins.plastic += 1;
    if (item < 0) bins.glass += 1;
    if (!item) bins.card += 1;
  }
  return Object.values(bins);
};
