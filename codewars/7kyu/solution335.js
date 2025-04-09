/*
Building Strings From a Hash

Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

Will the argument passed into the function always be an object?
Will the return always be a string?

console.log(solution({'a': 1, 'b': 2}), 'a = 1,b = 2')
console.log(solution({'a': 'b', 'b': 'a'}), 'a = b,b = a')
console.log(solution({0: 'a', 'b': 2}), '0 = a,b = 2')
console.log(solution({'b': 1, 'c': 2, 'e': 3}), 'b = 1,c = 2,e = 3')
console.log(solution({}), '')

TODO:
create an array
iterate over key-pair values in the obj
push key = value as a string to array
join the array w comma
*/

const solution = pairs => {
    const str = [];
    for(let pair in pairs){
      str.push(`${pair} = ${pairs[pair]}`)
    }
    return str.join(",");
  };