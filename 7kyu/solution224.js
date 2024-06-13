/*
Ghostbusters (whitespace removal)

Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

"Sky scra per" -> "Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"

Will the argument passed into the function's parameter always be a string?
Will the return always be a string?

console.log(ghostBusters("Factor y"), "Factory");
console.log(ghostBusters("O  f fi ce"), "Office);
console.log(ghostBusters("BusStation") === "You just wanted my autograph didn't you?");

TODO:
if input string has whitespace, return "You just wanted my autograph didn't you?", else return string with no space
*/

const ghostBusters = building => building.includes(' ') ? building.replace(/\s/g, "") : "You just wanted my autograph didn't you?";