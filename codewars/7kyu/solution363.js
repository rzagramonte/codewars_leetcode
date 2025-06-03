/*
Genetic Algorithm Series - #3 Crossover


In genetic algorithms, crossover is a genetic operator used to vary the programming of chromosomes from one generation to the next.

The one-point crossover consists in swapping one's cromosome part with another in a specific given point. The image bellow shows the crossover being applied on chromosomes 1011011001111 and 1011100100110 with the cut point (index) 4:



In this kata you have to implement a function that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].

Example:
chromosome1 = "111000"
chromosome2 = "000110"
index = 3
# should return ["111110", "000000"]

describe("Tests", () => {
  it("test", () => {
Test.expect(crossover('110','001',2)[0] === '111' && crossover('110','001',2)[1] === '000');
Test.expect(crossover('111000','000110',3)[0] === '111110' && crossover('111000','000110',3)[1] === '000000');
  });
});

*/

const crossover = (chromosome1, chromosome2, index) => {
  return [
    chromosome1.substring(0, index) + chromosome2.substring(index),
    chromosome2.substring(0, index) + chromosome1.substring(index)
  ]
};