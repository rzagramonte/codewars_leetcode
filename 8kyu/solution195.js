/*
Sort and Star

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

Will the parameters always be an array of strings?
Will the strings either all be lowercase or all uppercase? Any combination of lower and uppercase to look out for?
Will the return always be a string?

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
*/

//declare function and set parameter
//sort alphabetically and its case sensitive based on the ASCII values of the chars
//pull out the first element
//split string by character
//add *** between each letter and return it all joined up

function twoSort(s) {
let sortedArr = s.sort(function(a,b){
    for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) != b.charCodeAt(i)) {
          return a.charCodeAt(i) - b.charCodeAt(i);
        }
      }
      return 0;
})
return sortedArr[0].split('').join('***');
}