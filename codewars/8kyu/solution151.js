/*
Hello, Name or World!

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

If the parameter is truthy, will it always be a string?
Will the return always be a string of either "Hello, World!" or "Hello, [name]!", where name has a capital first letter and all other letters are lowercase?

console.log(hello('alice'), 'Hello, Alice!');
console.log(hello(), 'Hello, World!');
console.log(hello(''), 'Hello, World!');
*/

//declare function and set parameter
function hello(name) {
    //declare variable and assign to an empty array
    let newArr = [];
    //if name is truthy
    if(name){
        //set up for loop to iterate over the string name
        for(let i=0; i < name.length; i++){
        //if it's the first element/letter in the string
      if(i == 0){
        //using the push() method, push the element/letter capitalized to newArr using the toUpperCase() method
        newArr.push(name[i].toUpperCase());
      }else{//all other elements/letters
        //using the push() method, push the element/letter as a lowercase to newArr using the toUpperCase() method
        newArr.push(name[i].toLowerCase());
    };};};
    //declare variable and assign it to newArr appended to the join() method using dot notation
    let newName = newArr.join('');
    //use return keyword and ternary/conditional operator
    //if name is truthy, using a template literal return string of `Hello, ${newName}!`
    //else return string of 'Hello, World!'
    return name ? `Hello, ${newName}!`: 'Hello, World!';
  }