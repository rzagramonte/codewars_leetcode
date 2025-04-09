/*
Alan Partridge II - Apple Turnover

Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Will the parameter always be a number?
Will the return always be a string?

console.log(apple('50'), 'It\'s hotter than the sun!!');
console.log(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.');
*/

//declare function and set parameter
function apple(x){
    //use return keyword and ternary/conditional operator
    //if x squared is greater than 1000 return 'It\'s hotter than the sun!!'
    //else return 'Help yourself to a honeycomb Yorkie for the glovebox.'
    return x ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
  }