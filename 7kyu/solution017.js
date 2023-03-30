/*
International Morse Code Encryption

Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.

Characters should be separated by a single space. Words should be separated by a triple space.

For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."

To find out more about Morse Code follow this link: https://en.wikipedia.org/wiki/Morse_code

A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code.

Will the parameter always be a string?
Will the return always be a string?

console.log(encryption("HELLO WORLD"), ".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
console.log(encryption("SOS"), "... --- ...");
console.log(encryption("1836"), ".---- ---.. ...-- -....");
console.log(encryption("THE QUICK BROWN FOX"), "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-");
console.log(encryption("JUMPED OVER THE"), ".--- ..- -- .--. . -..   --- ...- . .-.   - .... .");
*/

//declare const variable and assign to arrow function
//set parameter
const encryption = message => {
    //declare variable and assign to an empty string
    let morseCode = '';
    //create for loop to iterate over message
    for (let i = 0; i < message.length; i++) {
        //declare const variable and assign to character at index i
      const char = message.charAt(i);
      //if character is in CHAR_TO_MORSE
      if (char in CHAR_TO_MORSE) {
        //concatenate the corresponding morse code character plus a space into morseCode
        morseCode += CHAR_TO_MORSE[char] + ' ';
      } else {
        //else concatenate double space into morseCode
        morseCode += '  ';
      }
    }
    //return morseCode with extra space trimmed off the end of the string
    return morseCode.trim();
  }