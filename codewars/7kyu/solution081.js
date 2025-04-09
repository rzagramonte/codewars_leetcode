/*
Deletion in an array

The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?

Will the parameter always be an array and a function?
Will the return always be an array?

*/

//declare constant variable which will be assigned to an arrow function
//set parameters for array and function
//create for loop
//if function pred is truthy if current element is passed in, delete that element
//take it back now y'all, 1 hop
//return array
const deleteValues = (array, pred) => {
    for(let i = 0; i < array.length; i++){
      if (pred(array[i])) {
        array.splice(i, 1);
        i--;
      };
    };
    return array;
  };
  