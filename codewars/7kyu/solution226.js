/*
String Reversing, Changing case, etc.

Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 

Will the arguments passed into the function's parameters always be two strings?
Will the return always be one string?

console.log(reverseAndMirror("FizZ","buZZ"), "zzUB@@@zZIffIZz");
console.log(reverseAndMirror("String Reversing","Changing Case"), "ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING");

TODO:
reverse string and invert casing for s1 and s2
also invert casing for s2 in a separate string
combine all the components
*/

const reverseAndMirror = (s1,s2) => {
    s2 = [...s2].reverse().map(e=>e==e.toLowerCase()?e.toUpperCase():e.toLowerCase()).join('');
    const s1a = [...s1].reverse().map(e=>e==e.toLowerCase()?e.toUpperCase():e.toLowerCase()).join('');
    const s1b = [...s1].map(e=>e==e.toLowerCase()?e.toUpperCase():e.toLowerCase()).join('');
    return `${s2}@@@${s1a}${s1b}`;
  };