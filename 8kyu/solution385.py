'''
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

Will the argument passed into the function's parameter always be a string?
Will the return always be a string?

print(dna_to_rna("TTTT"), "UUUU")
print(dna_to_rna("GCAT"), "GCAU")
print(dna_to_rna("GACCGCCGCC"), "GACCGCCGCC")

replace all "T" with "U"
'''

dna_to_rna = lambda dna: dna.replace('T','U')