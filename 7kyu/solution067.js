/*
Thinkful - Object Drills: Vectors

Create a Vector class with x and a y attributes that represent component magnitudes in the x and y directions.

Your vectors should handle vector additon with an .add() method that takes a second vector as an argument and returns a new vector equal to the sum of the vector you call .add() on and the vector you pass in.

For example:

>>> a = Vector(3, 4)
>>> a.x
3
>>> a.y
4
>>> b = Vector(1, 2)
>>> c = a.add(b)
>>> c.x
4
>>> c.y
6
Adding vectors when you have their components is easy: just add the two x components together and the two y components together to get the x and y components for the vector sum.

Will the input always be two numbers and an object?
Will the output be either a number or new object?

console.log(new Vector(3, 4).x, 3);
console.log(new Vector(3, 4).y, 4);
console.log(new Vector(3, 4).add(new Vector(1, 2)).x, 4);
console.log(new Vector(3, 4).add(new Vector(1, 2)).y, 6);
*/

//create class Vector
//create constructor to instantiate the properties of the object instances
//create method add
//method add takes in an object
//method add returns a new object that adds property x of the one obj to property x of the input obj
//method add returns a new object that adds property y of the one obj to property y of the input obj
class Vector{
    // Your code here.
    constructor(x,y){
      this.x=x;
      this.y=y;
    }
    add(vector){
      return new Vector(this.x + vector.x, this.y + vector.y);
    }
  }