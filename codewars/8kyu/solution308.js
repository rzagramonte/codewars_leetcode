/*
Color Ghost

Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

Will the input be accessing the property color of Ghost?
Will the return be one of four strings?

let colors = ['white', 'yellow', 'purple', 'red'];
console.log(colors.includes(new Ghost().color),true);
*/

//create a constructor called Ghost
//create property color and set the this context to the object instance of Ghost
//value should be string based on what Math.random() results in
const Ghost = function(){
    this.color=Math.random()<.25?"white":Math.random()<.50?"yellow":Math.random()<.75?"purple":"red";
  };