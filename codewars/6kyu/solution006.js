/*
Title Case

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

Will the parameter always be at least one string?
Will there be times when there is an optional second string passed into the function?
Will the return always be a string?

console.log(titleCase(''), '');
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox');
*/

//declare constant variable titleCase which will be assigned to an arrow function
//set parameters title and minorWords
//if minorWords is truthy:
//convert title to all lowercase and split it into an array and assign it to variable arr
//convert minorWords to all lowercase and split it into an array and assign it to variable splitMinor
//map over arr creating new array newArr: if the inverse of i is truthy return string where the first letter is caps and the other letters aren't
//else if splitMinor includes w then return all of w lowercased
//else return string where the first letter is caps and the other letters aren't
//join newArr with one space between the elements and assign it to newStr
//return newStr
//if minorWords is falsy:
//convert title to all lowercase and split it into an array and assign it to variable arr
//map over arr creating new array newArr: return string where the first letter is caps and the other letters aren't
//join newArr with one space between the elements and assign it to newStr
//return newStr
const titleCase = (title, minorWords) => {
    if(minorWords){
        let arr = title.toLowerCase().split(' ');
        let splitMinor = minorWords.toLowerCase().split(' ');
        let newArr = arr.map((w,i)=>!i?w[0].toUpperCase()+w.slice(1).toLowerCase() : splitMinor.includes(w)?w.toLowerCase():w[0].toUpperCase()+w.slice(1).toLowerCase());
        let newStr = newArr.join(' ');
          return newStr
    }else{
        let arr = title.toLowerCase().split(' ');
        let newArr = arr.map((w,i)=>w.slice(0,1).toUpperCase()+w.slice(1).toLowerCase());
        let newStr = newArr.join(' ');
          return newStr
    };
  };