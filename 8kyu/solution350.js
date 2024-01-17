/*
What's up next?

Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

Will the parameter always be an iterable and another value of any data type?
Can the iterable be either a string or array?
Will the return always either be contained in the input or return undefined?

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
console.log(nextItem(['a', 'b', 'c'], 'd'), undefined);
console.log(nextItem(['a', 'b', 'c'], 'c'), undefined);
console.log(nextItem("testing", "t"), "e");
*/

//iterate over xs
//if found is truthy, return the element
//if the element and item are equal in value, set found to true
const nextItem = (xs, item) => {
    let found = false;
    for (let x of xs) {
      if (found) return x;
      if (x == item) found = true;
    };
  };