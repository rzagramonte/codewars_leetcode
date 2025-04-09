/*
Turn any word into a beef taco

If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.

Will the parameter always be a string?
Will the return always be an array?

console.log(tacofy(""),['shell', 'shell']);
console.log(tacofy("a"), ['shell', 'beef', 'shell']);
console.log(tacofy("ggg"), ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell']);
console.log(tacofy("ogl"),['shell', 'beef', 'guacamole', 'lettuce', 'shell']);
console.log(tacofy("ydjkpwqrzto"), ['shell', 'tomato', 'beef', 'shell']);
*/


//declare constant variable which will be assigned to arrow function
//set parameter
//create object with ingredient list
//create array by spreading string into array
//map over array where if lowercase letter is found in object as a key, return the key's value
//filter truthy values
//return array where "shell" is the first and last element and tacoInsides is spread between these two strings
const tacofy = word => {
    const ingredients = {
      a: "beef",
      e: "beef",
      i: "beef",
      o: "beef",
      u: "beef",
      t: "tomato",
      l: "lettuce",
      c: "cheese",
      g: "guacamole",
      s: "salsa"
    };
    let tacoInsides = [...word].map(l => {
      if(l.toLowerCase() in ingredients) return ingredients[l.toLowerCase()];
    }).filter(i => i);               
    return ["shell",...tacoInsides, "shell"];
  };