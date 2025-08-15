/*
Training Time

Complete the function that accepts two or more parameters. The first parameter is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements.

Will the arguments passed into the array always be arrays of numbers?
Will the return always be ana rray of numbers?

console.log(shuffleIt([1,2,3,4,5],[1,2]) , [1,3,2,4,5]);
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]) , [1,3,2,5,4]);
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) , [1,3,5,2,4]);

TODO:
iterate over rest
swap
return arr
*/

const shuffleIt = (arr, ...rest) => {
  for(const swap of rest){
    [arr[swap[0]], arr[swap[1]]] = [arr[swap[1]], arr[swap[0]]];
  }
  return arr;
};