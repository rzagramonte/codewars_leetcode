/**
Valid Sudoku
Solved 
You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.
**/

class Solution {
    /**
       * @param {character[][]} board
       * @return {boolean}
  
       * 1. Each row must contain the digits 1-9 without duplicates.
          - true or false for the folllowing:
          - filter out "."
          - check if length of element is the same when you pass it into a new Set object and spread it into an array
          - iterate over element to check if number is either less than 10, greater than 0 OR "." - no it will always be a number 1-9, we're only checking for duplicates
          - where are you going to store the true or false for each thing we have to check off? in an array? we could also do an object: ex: validation = {true: 23, false: 1} therefore this would return false for the whole thing. what if you just counted falses? so const validation = 0; if this number is higher than 0 return false
       * 2. Each column must contain the digits 1-9 without duplicates.
          - true or false for the folllowing:
          - should we create an array for each position of the array in every array in the array?
          - Array.from({length:9}, (e,j,a)=>board[j][i])
          - when we're in the first element we are creating an array but not double iterating
          - we're only iterating once then pulling each element directly from the postion we're at
          - ex: we are in the first element of the entire array
          - first element is an array
          - wait do we even have to iterate over the array? we can just iterate or loop 9 times, not necessarily over an existing array
          - create the array
          - are we creating a whole new array of arrays?
          - we're flipping the columns to rows so we could do what we did in the first part of this
          - Array.from({length:9},(e,i,a)=>Array.from({length:9},(n,j,r)=>))
          - check if length of element is the same when you pass it into a new Set object and spread it into an array
          - iterate over array to check if number is either less than 10, greater than 0 OR "."
       * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
          - create 9 arrays and seeing if each array's length is the same as
          - left to right then down, left to right then down, left to right then down
          - is this the best way to do it? yes i think it should iterate like reading a book
     **/
    isValidSudoku(board) {
      let validation = 0;
  
      let transposedBoard = Array.from({ length: 9 }, (_, row) => Array.from({ length: 9 }, (_, col) => board[col][row]));
      let subBoxes = ((board) => {
        return Array.from({ length: 9 }, (_, i) => {
          const rowStart = Math.floor(i / 3) * 3;
          const colStart = (i % 3) * 3;
          return Array.from({ length: 3 }, (_, r) => Array.from({ length: 3 }, (_, c) => board[rowStart + r][colStart + c])).flat();
        });
      })(board);
  
      const validationCounter = (board) => {
        for (let row of board) {
          row = row.filter((e) => Number.isInteger(+e));
          if (row.length != [...new Set(row)].length) validation += 1;
        }
      };
  
      validationCounter(board);
      validationCounter(transposedBoard);
      validationCounter(subBoxes);
  
      return !validation;
    }
  }
  