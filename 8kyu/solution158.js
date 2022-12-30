/*
Reversing Words in a String
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!

Will the parameter always be a string?
Will the return always be a string with its words reversed?

console.log(reverse('I am an expert at this'), 'this at expert an am I');
console.log(reverse('This is so easy'), 'easy so is This');
console.log(reverse('no one cares'), 'cares one no');
console.log(reverse(''), '');
console.log(reverse('CodeWars'), 'CodeWars');
*/

//declare function and set parameter
function reverse(string){
    //your code here
    //use return keyword 
    //return string split by ' ', reversed, then joined by ' '
    return string.split(' ').reverse().join(' ');
  }