/*
Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

P.R.E.P.
parameters: a string
return: a string
examples:
input => output
("L0ND0N") => "LONDON"
("DUBL1N") => "DUBLIN"
("51NGAP0RE") => "SINGAPORE"
("BUDAPE5T") => "BUDAPEST"
("PAR15") => "PARIS"
pseudocode:
declare a function
set a parameter
declare variable correctedChars and assign it to an empty string
create for loop
let i = 0
i < string.length
i ++
in the body of the for loop:
switch case
if string [i] === 5 correctedChars += 'S'
if string [i] === 0 correctedChars += 'O'
if string[i] === 1 correctedChars += 'I'
else correctedChars += string[i]
return correctedChars
*/

function correct(string){
	// your code here
    let correctedChars = '';
    for(let i = 0; i < string.length; i++){
        switch(string[i]){
            case '5':
              correctedChars += 'S';
              break;
            case '0':
              correctedChars += 'O'
              break;
            case '1':
              correctedChars += 'I';
              break;
            default:
              correctedChars += string[i];
              break;
          };
    };
    return correctedChars;
}