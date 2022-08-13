/*
DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

P.R.E.P.
parameters: a string
return: a modified string if T is present in the argument
example: "GCAT"  =>  "GCAU"
pseudocode:
declare function
set parameter
split the string using the split() method
iterate over the string
if arr[i] === "T" return "U"
use the join() method to return the new array
*/

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let nucleotideBase = dna.split('');
    for(let i=0; i<nucleotideBase.length; i++){
        if (nucleotideBase[i] === 'T'){
            nucleotideBase[i] = 'U';
        }
    }
    return nucleotideBase.join('');
  }