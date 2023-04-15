/*
No zeros for heros

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

Will the parameter always be a number?
Will the return always be a number?

console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
*/

//declare const variable and assign to arrow function
//set parameter
const noBoringZeros = n => {
    //declare variable and assign to an array of substrings of n
    let result = n.toString().split('');
    //create for loop
    for(let i = result.length - 1; i >= 0; i--){
        //if element does not equal "0"
      if(result[i] !== "0"){
        //break out of loop
        break;
      }else{
        //reassign element to ''
        result[i] = '';
      };
    };
    //return the result as one number
    return Number(result.join(''));
  };