/*
Initialize my name

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

Will the parameter always be a string?
Will the return always be a string?

console.log(initializeNames('Jack Ryan'), 'Jack Ryan');
console.log(initializeNames('Lois Mary Lane'), 'Lois M. Lane');
console.log(initializeNames('Dimitri'), 'Dimitri');
console.log(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis');
*/

//declare constant variable initializeNames which will be assigned to an arrow function
//set parameter name
//split the array by names
//create a new array
//iterate over array name
//if i is equal in value to 0 or the last index of the array, push that element to the new array
//else push the initial to the new array
//return the new array as a string joined by a space
const initializeNames = name => {
    // Insert your brilliant code here
    let nameArr = name.split(' ');
    let newName = [];
    for(let i =0;i<nameArr.length;i++){
      if(i==0 || i == nameArr.length-1){
        newName.push(nameArr[i]);
      }else{
        newName.push(`${nameArr[i][0]}.`);
      }
    }
    return newName.join(' ');
  };