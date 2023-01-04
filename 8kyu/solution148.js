/*
Drink about

Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

Will the parameter always be a non-negative whole number?
Will the return always be a string of "drink toddy", "drink coke", "drink beer", "drink beer", or "drink whisky"?

console.log(peopleWithAgeDrink(13), 'drink toddy');
console.log(peopleWithAgeDrink(17), 'drink coke');
console.log(peopleWithAgeDrink(18), 'drink beer');
console.log(peopleWithAgeDrink(20), 'drink beer');
console.log(peopleWithAgeDrink(30), 'drink whisky');
*/

//declare function and set parameter
function peopleWithAgeDrink(old) {
    // use return keyword and ternary/conditional operator
    // if old is less than 14 return 'drink toddy'
    // if old is greater than 13 and less than 18 return 'drink coke'
    // if old is greater than 17 and less than 21 return 'drink beer'
    // else return 'drink whisky'
    return (old < 14) ? 'drink toddy' : 
    (old > 13 && old < 18) ? 'drink coke' : 
    (old > 17 && old < 21) ? 'drink beer' : 'drink whisky';
  };
