/*
Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Will the parameter always be two arrays?
Will the elements of the input arrays always be numbers if any?
Will the return always be an array?
Will the elements of the returned array always be numbers if any?

console.log(arrayDiff([1,2], [1]), [2]);
console.log(arrayDiff([1,2,2], [1]), [2,2]);
console.log(arrayDiff([1,2,2], [2]), [1]);
console.log(arrayDiff([1,2,2], []), [1,2,2]);
console.log(arrayDiff([], [1,2]), []);
console.log(arrayDiff([1,2,3], [1,2]);
*/

//loop through both of the arrays at the same time
//if the elements are the same, splice it out of array a and hop back one
//return array a
const arrayDiff = (a, b) => {
    for(let i=0; i<a.length;i++){
      for(let j=0; j<b.length; j++){
        if(a[i] == b[j]){
          a.splice(i,1);
          i--;
        };
      };
    };
    return a;
  };