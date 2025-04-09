/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

Will the parameter always be a string?
Will the function always return a string?

console.log(spinWords("Welcome"), "emocleW")
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw")
console.log(spinWords("This is a test"), "This is a test")
console.log(spinWords("This is another test"), "This is rehtona test")
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test")
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more")
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one")
*/

function spinWords(string){
    //TODO Have fun :)
    //declare variable words and assign it to string.split(' ')
    //the variable words holds an array of each word as an element
    let words = string.split(' ');
    //declare variable newArr and assign it to an empty array using literal notation
    let newArr = [];
    //create for loop where i =0; i < words.length; i++
    for(let i = 0; i < words.length; i++){
        //use if else statement
        //if the element in the words array, which is a string, has a length that is greater than or equal to 5
        if (words[i].length >= 5){
        //push the word with reversed in place letters to newArr but not before splitting the word into an array of substrings and then joining it after the reversal process
      newArr.push(words[i].split('').reverse().join(''));
    }else{//default
        //push the word into newArr
      newArr.push(words[i]);
    }};
    //return newArr after joining the words together into a string with a space between each word
    return newArr.join(' ');  
  }