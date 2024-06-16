/*
Grasshopper - Terminal game combat function

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

Will the argument's passed into the function's parameters always be two numbers?
Will the return always be one number?

console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0);

TODO:
if health is greater than damage, return health minus damage else return 0
*/

const combat = (health, damage) => health > damage ? health - damage : 0;