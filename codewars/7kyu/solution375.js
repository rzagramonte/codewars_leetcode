/*
Borrower Speak

The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

The young borrowers have begged their parents to stop using caps and punctuation.

Change the input text s to new borrower speak. Help save the next generation!

Will the argument passed into the function always be a string?
Will the return always be a string?

console.log(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake');
console.log(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere'); 
console.log(borrow('i AM a TINY BoY!!'), 'iamatinyboy'); 

TODO:
convert string to lowercase
spread string into an array
filter characters a-z
join the substrings to a string
*/

const borrow = (s) => [...s.toLowerCase()].filter((e) => /[a-z]/g.test(e)).join("");
