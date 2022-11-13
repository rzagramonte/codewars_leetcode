/*
Complementary DNA
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

Will the parameter always be a string?
Will the return always be a string?
console.log(DNAStrand("AAAA"),"TTTT")
console.log(DNAStrand("ATTGC"),"TAACG")
console.log(DNAStrand("GTAT"),"CATA")
*/

function DNAStrand(dna){
    //your code here
    //declare variable and assign it to the parameter dna appended using dot notation to the split function and passing in an argument of ''
    let nucleotideBases = dna.split('');
    //create for loop
    //let i = 0
    //i < nucleotideBases.length
    //i++
    for(let i = 0; i <nucleotideBases.length; i++){
    //if element is equal in value and type to 'A'
    if(nucleotideBases[i] === 'A'){
        //reassign it to 'T'
      nucleotideBases[i] = 'T';
      //if element is equal in value and type to 'T'
    }else if(nucleotideBases[i] === 'T'){
        //reassign it to 'A'
      nucleotideBases[i] = 'A';
        //if element is equal in value and type to 'C'
    }else if(nucleotideBases[i] === 'C'){
        //reassign it to 'G'
      nucleotideBases[i] = 'G';
        //if element is equal in value and type to 'G'
    }else if(nucleotideBases[i] === 'G'){
        //reassign it to 'C'
      nucleotideBases[i] ='C';
    };
    };
    //return nucleotideBases attached using dot notation to the join method passing in '' as a parameter
    return nucleotideBases.join('');
  }