/*
Difference between two collections

Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]

Will the arguments passed into the function's parameters always be two arrays of strings?
Will the return always be an array of sorted strings?
*/

//clear duplicates
//return b if a is empty
//return a if b is empty
//loop through both arrays
//if element from one array is equal to element in other array, eliminate both
//return both arrays concatenated and sorted
const diff = (a, b) => {
    a = [...new Set(a)];
    b = [...new Set(b)];
    
    if(!a.length) return b;
    if(!b.length) return a;
  
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < b.length; j++){
        if(a[i] == b[j]){
          a.splice(i,1);
          b.splice(j,1);
          i--;
          j--;
        };
      };
    };
    
    return a.concat(b).sort();
};