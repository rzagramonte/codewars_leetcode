/*
Shifty Closures

Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};
*/

let name = 'Abe';
const greet_abe = () => `Hello, ${name}!`;

const greet_ben = () => {
  name = 'Ben';
  return `Hello, ${name}!`;
};