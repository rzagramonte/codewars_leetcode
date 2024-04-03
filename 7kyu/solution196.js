/*
Fast cooking pancakes

You need to cook pancakes, but you are very hungry. As known, one needs to fry a pancake one minute on each side. What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time? n and m are positive integers between 1 and 1000.

Will the arguments passed into the function's parameters always be two numbers?
Will the two numbers always be whole numbers between 1 and 1000?
Will the amount of time to cook each pancake always be 2 minutes?
Will the return always be a whole number?

console.log(cookPancakes(1, 2), 2);
console.log(cookPancakes(2, 2), 2);
console.log(cookPancakes(4, 2), 4);
*/

//is n less than or equal to m ? return 2, else return n divided by m times two and rounded up
const cookPancakes = (n, m) => n<= m ? 2 : Math.ceil(n / m*2);