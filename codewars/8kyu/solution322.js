/*
Implement Array.prototype.filter()

What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

More info can be found here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Will the parameter always be a function?
Will the return always be an array?
Will the elements of the returned array always be numbers?

console.log([1,2,3,4].filter((num)=>{ return num > 3}), [4]);

*/

Array.prototype.filter = function (func) {
    //nothing here, you will feel pretty awesome to write down by yourself
    //have fun :)
    const filtered = [];
  
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        filtered.push(this[i]);
      }
    }
  
    return filtered;
  }
  