/*
Sorting Arrays ... wait, what?!

Sorting an array of positive integers
Background
You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice). One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!

Task
Being the developer that you are, you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.

Extension
If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) but please note that it is not required and will not be tested.

console.log([9,7,2,4,5,3,6,8,1].sort(),[1,2,3,4,5,6,7,8,9]);

TODO:
if the elements are not numbers, or not greater than 0 or the length of the array is less than or equal to 1, return the array
//implement quicksort elsewise
*/

Array.prototype.sort = function () {
    if (!this.every(e => typeof e === 'number' || e > 0) || this.length <= 1) return this;
    const pivot = this[0];
    const left = [];
    const right = [];
    for(let i = 1; i < this.length; i++){
      if(this[i] < pivot){
        left.push(this[i]);
      }else{
        right.push(this[i]);
      }
    }
    return [...left.sort(), pivot, ...right.sort()];
};