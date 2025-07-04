/*
esreveR

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

Will the argument passed into the function always be an array?
Will the return always be an array?


console.log( reverse([1,2,3]), [3,2,1] )
console.log( reverse([1,null,14,"two"]), ["two",14,null,1] )

TODO:
create new array
iterate over input array backwards
push current elemeent into new array
return new array
*/

const reverse = (array) => {
  const res = [];
  for (let i = array.length - 1; i >= 0; i--) {
    res.push(array[i]);
  }
  return res;
};
