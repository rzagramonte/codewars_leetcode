/*
GA-DE-RY-PO-LU-KI cypher

Introduction
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.
The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

Task
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

Example
 encode("ABCD")          // => GBCE 
 encode("Ala has a cat") // => Gug hgs g cgt 
 encode("gaderypoluki"); // => agedyropulik
 decode("Gug hgs g cgt") // => Ala has a cat 
 decode("agedyropulik")  // => gaderypoluki
 decode("GBCE")          // => ABCD

Will the argument passed into the functions always be a string?
Will the return always be a string?

console.log( encode("Ala has a cat") , "Gug hgs g cgt" );
console.log( decode("Gug hgs g cgt") , "Ala has a cat" );
console.log( encode("ABCD") , "GBCE" );
console.log( encode("gaderypoluki") , "agedyropulik" );
console.log( decode("agedyropulik") , "gaderypoluki" );
console.log( decode("GBCE") , "ABCD" );

TODO:
replace cypher with corresponding charater
*/

const encode = str => {
    const cypher = {
      A: "G",
      a: "g",
      E: "D",
      e: "d",
      Y: "R",
      y: "r",
      O: "P",
      o: "p",
      U: "L",
      u: "l",
      I: "K",
      i: "k",
      G: "A",
      g: "a",
      D: "E",
      d: "e",
      R: "Y",
      r: "y",
      P: "O",
      p: "o",
      L: "U",
      l: "u",
      K: "I",
      k: "i"
    }
      return str.replace(/[AEYOUIGDRPLK]/ig, e=>cypher[e]);   
  };
  
  const decode = str => encode(str);