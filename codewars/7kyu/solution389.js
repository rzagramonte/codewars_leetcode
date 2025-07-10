/*
shorter concat [reverse longer]

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

Will the arguments always be two strings?
Will the return always a string?

console.log(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
console.log(shorterReverseLonger("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
console.log(shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );

TODO:
if length of a is greater than length of b
OR
length of a is equal in value to length of b
return b + a-in-reverse + b
else return a + b-in-reverse + a
*/

const shorterReverseLonger = (a,b) => a.length > b.length || a.length == b.length ? b + [...a].reverse().join("") + b : a + [...b].reverse().join("") + a;