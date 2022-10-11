/*
I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

P.R.E.P.
parameter(s): an array
return: number, an element
example:
input => output
([1,2,3]) => 3
([1,2,3]) => 1
([1,2,3]) => 3
([1,2,3]).length => 4
([1,2,3]).length => 2
pseudocode:
declare function
set parameter(s)
return respective elements or numbers
when pushing or popping, apply the method to the array then return the array - cannot be done in one line
*/

function getLength(arr){
    //return length of arr
    return arr.length;
}
function getFirst(arr){
    //return the first element of arr
    return arr.shift();
}
function getLast(arr){
    //return the last element of arr
    return arr.pop();
}
function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el);
    return arr;
}
function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr;
}