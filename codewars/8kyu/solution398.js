/*
Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.

Will the argument passed into the method's parameter always be an array of strings?
Will the return always be an object?


var people1 = ['bob','john'];
var people2 = ['bob','john','dave'];
var people3 = [];
var people4 = ['bob','john','dave','matt','alex'];

var person1 = Person();
person1.fillFriends(people1)
var person2 = Person();
person2.fillFriends(people2)
var person3 = Person();
person3.fillFriends(people3)
var person4 = Person();
person4.fillFriends(people4)

console.log(person1, person2, person3, person4);

TODO:
method should iterate over the input array and fill the _friends array with its elements

*/

var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) {
        f.forEach((e,i)=>this._friends[i] = e)
      }
    }
    return person;
  }