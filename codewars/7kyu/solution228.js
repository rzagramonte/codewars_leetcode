/*
Running out of space

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

Will the argument passed into the function's parameter always be an array of strings?
Will the return always be an array of strings?

console.log(spacey(['kevin', 'has','no','space']), ['kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']), ['this', 'thischeese', 'thischeesehas', 'thischeesehasno', 'thischeesehasnoholes']));

TODO:
create new array to push results
push before element plus current
*/

const spacey = array => {
    const results = [array[0]];
    for(let i = 1; i < array.length; i++){
      results.push(results[i-1]+array[i]);
    }
    return results;
  }