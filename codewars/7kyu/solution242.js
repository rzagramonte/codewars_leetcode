/*
Adding Arrays

Create a function that takes an array of letters, and combines them into words in a sentence. The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc. Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array). The array will be formatted as so:

[
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]

Will the argument passed into the function always be an array of arrays of strings?
Will the return always be a string?

console.log(arrAdder([
['J','L','L','M'],
['u','i','i','a'],
['s','v','f','n'],
['t','e','e','']
]),"Just Live Life Man");

console.log(arrAdder([ 
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] ]), "The Mitochondria is the powerhouse of the cell");

TODO:
create new empty string
loop over the inner arrays
loop over the outer array
add each corresponding letter to str
add space after each word
trim ends
return result
*/

const arrAdder = arr => {
    let str = '';
    for(let i = 0 ; i<arr[0].length; i++){
      for(let j = 0; j<arr.length; j++){
        str += arr[j][i];
      }
      str += " ";
    }
    return str.trim();
  };