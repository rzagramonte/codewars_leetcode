/*
Welcome to the City

Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

Will the parameters always be an array and two strings?
Will the return always be a string?

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!');
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!');
console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!');
*/

//declare function and set parameters
function sayHello( name, city, state ) {
    //reassign name to name joined by spaces
    name = name.join(' ');
    //using template literal, return string with interpolated variables
    return`Hello, ${name}! Welcome to ${city}, ${state}!`
  }