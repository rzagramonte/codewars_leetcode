/*
Interview Question (easy)

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
Have fun! ;)

console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
console.log(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");

TODO:
create object
iterate over string as an array
for each iteration, if the letter is in the object add "*" to the else add the letter as a property with "*" as the value
return the object as an array properly formatted
*/

const getStrings = city => {
    const asterisks = {};
    [...city.replace(/[^a-z]/gi,"").toLowerCase()].forEach(l=>asterisks[l] ? asterisks[l] += "*" : asterisks[l] = "*");
    return Object.entries(asterisks).map(e=>`${e[0]}:${e[1]}`).join(",");
};