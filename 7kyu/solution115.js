/*
Santa's Naughty List

Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

Will the parameters always be two arrays?
Can the length of the first input array be greater than or less than the length of the second input array?
Will the elements of both arrays always be strings?
Will the return always be an array?
Will the elements of the returned array always be strings?

console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"]), ["Jason", "Jordan"]);
console.log(findChildren(["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]), ["JAsoN", "jASon"]);
console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]), ["James", "Jason"]);
*/


//declare constant variable findChildren which will be assigned to an arrow function
//set parameters santasList and children
//create variable goodChildren and assign to an empty array
//create a for of loop
//if santasList includes said child, push said child to the goodChildren list
//return new array with the unique elements of goodChildren and sort in string order
const findChildren = (santasList, children) => {
    // Your code
    let goodChildren = [];
    for(let child of children){
      if(santasList.includes(child)) goodChildren.push(child);
    };
    return [...new Set(goodChildren)].sort();
};