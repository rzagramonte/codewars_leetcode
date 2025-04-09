/*
Duck Duck Goose

The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

Will the parameters always be an array of objects (players) and a number (goose)?
Will the name returned always be in the form of a string?

tests =>

class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 1),  "a")
console.log(duckDuckGoose(players, 3),  "c")
console.log(duckDuckGoose(players, 10), "z")
console.log(duckDuckGoose(players, 20), "z")
console.log(duckDuckGoose(players, 30), "z")
console.log(duckDuckGoose(players, 18), "g")
console.log(duckDuckGoose(players, 28), "g")
console.log(duckDuckGoose(players, 12), "b")
console.log(duckDuckGoose(players, 2),  "b")
console.log(duckDuckGoose(players, 7),  "f")
*/
//declare functions and set parameters players and goose
function duckDuckGoose(players, goose) {
    /*
    use return keyword
    following return keyword list players with square brackets
    inside square brackets: goose - 1 to represent 1-based indexing followed by modulus players.length
    use dot notation to append name to the above square brackets
    */
    return players[(goose - 1) % players.length].name;
  }