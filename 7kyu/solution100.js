/*
Can this object fly? Balloons in "Up" and in real life

The story of the famous Disney-Pixar animated movie "Up" is based on the main character Carl Fredricksen journey in his home equipped with balloons.

But can this happen for real? What kind of objects can you lift with helium balloons? How many balloons do you need?

In this kata you will create a class

Journey(object, crew, balloons)

so anyone can create objects like

var gravityFalls = new Journey(house, 2, 20622)

which means starting a new journey to Gravity Falls in a house with 2 members of crew (Carl and Russel).

But is this journey possible? Will the house float? Is it enough to have 20622 helium balloons (the number used by Pixar animators in liftoff scene)?

Your Journey class should have a public method isPossible() that returns true or false based on these rules:

1). Every object (dictionary in Python) passed to Journey will have its weight property like

var house = {"weight": 45000};

(we will use metric system in this kata, 45 000 kg is about 100 000 pounds).

2). Each member of the crew weighs 80 kg.

3). We use regular sized party balloons filled with helium. Each balloon lifts 4.8 grams + its own weight.

Can you lift a tiny 95 kg(~200 pound) push cart with 50 balloons like in one of the starting scenes of the movie?

Can one balloon actually carry a message on a single letter-sized paper sheet sent by Carl to his dying wife Ellie in the other scene?

Can the story I heard about man flying in his lawn chair equipped with 1000 balloons be true?

Your coding mastery will reveal answers to these and many other important questions in the tests. Let the journey begin!

Will the first parameter be an object?
Will the object have one key labeled 'weight'?
Will the value of 'weight' be a number?
Will the second and third parameters take in numbers?
Will each crew weigh 80 kg?
Will each balloon be able to lift 4.8 grams plus its own weight?
Will there be a method on each instance of the object that will return a boolean of true or false?
Will the return be a boolean of true or false?
*/

//declare constructor
//create properties
//create method
function Journey(object, crew, balloons) {
    // let the journey begin
    this.object=object;
    this.crew=crew;
    this.balloons=balloons;
  
    this.isPossible = function(){
      return (this.crew * 80 + this.object.weight) / .0048 <= this.balloons;
    }
  }