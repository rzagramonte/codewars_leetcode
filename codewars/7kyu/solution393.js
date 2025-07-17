/*
Most sales

You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).

Note: if multiple products have the same revenue, order them according to their original positions in the input list.

Will the arguments passed into the function always be three arrays?
arr1 => strings
arr2 => numbers
arr3 => numbers

Will the return always be an array of strings?

console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]), ["Cell Phones", "Vacuum Cleaner", "Computer"]);
console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]), ['Vacuum Cleaner', 'Gold', ' Speakers']);
console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14]), ['Lego', 'Gold', 'Computer']);

TODO:
revenue = amount * price
match it to products
dump the matches into an array where each element is `${products[i]} ${revenue[i]}`
sort in descending order
*/



const top3 = (products, amounts, prices) => {
  const revenue = Array.from({length:products.length}, ((p,i)=>amounts[i] * prices[i]));
  let sales = {};
  
  for(let i = 0; i < products.length; i++){
    sales[products[i]] = revenue[i];
  }
  
  sales = Object.entries(sales).sort((a,b)=>b[1]-a[1]).map(e=>e[0]).slice(0,3);
  
  return sales;
};