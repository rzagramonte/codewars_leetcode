/*
How many lightsabers do you own?

Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18

Will the parameter always be string?
Will the return always be either the number 18 or 0?

console.log(howManyLightsabersDoYouOwn(), 0);
console.log(howManyLightsabersDoYouOwn("Adam"), 0);
console.log(howManyLightsabersDoYouOwn("Zach"), 18);
*/

//declare function and set parameter
function howManyLightsabersDoYouOwn(name) {
    //use return keyword and ternary/conditional operator
    // if name equals in value and type to 'Zach' then return the number 18 else return the number 0
    return name === 'Zach' ? 18 : 0;
  }