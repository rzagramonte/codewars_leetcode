/*
Arguments to Binary addition

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it

Will the argument passed into the array's parameter always be an array of either integers or other data types?
Will the return always be a string?

console.log(arr2bin([1,2], "11");
console.log(arr2bin([1,10,100,1000]), "10001010111");
console.log(arr2bin([null]), "0");
console.log(arr2bin([true,true,false,15]),"1111");
console.log(arr2bin([1,2,3,4,5]), "1111");

TODO:
return 'NaN' if NaN is present in the array
create new variable assigned to 0
iterate over array
if the element is a number and isnt NaN, add it to the sum
return the sum as a bit string
*/


const arr2bin = arr => {
    if(arr.some(e=>Number.isNaN(e))) return 'NaN';
    let sum = 0;
    for(const element of arr){
      if(typeof element === 'number' && !isNaN(element)) sum += element;
    };
    return sum.toString(2);
};

