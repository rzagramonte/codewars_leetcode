/*
Arithmetic List!

In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned
Useful link: Sequence

Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)

Will the parameters always be three numbers?
Will the return always be an array?
Will the elements in the returned array always be numbers?

console.log(seqlist(0,1,20),[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
*/


//declare constant variable seqlist which will be assigned to an arrow function
//set parameters first, c, and l
//declare variable arr and assign to array with first as an element
//create for loop where i is set to 1, i is less than l, and i increments by 1
//push the last element + c to arr
//return arr
const seqlist = (first,c,l) => {
    // Thou shalt begin !
      let arr = [first];
      for(let i=1;i<l;i++){
        arr.push(arr[arr.length-1]+c);
      };
      return arr;
    };