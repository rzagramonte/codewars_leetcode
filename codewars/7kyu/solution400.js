/*
Airport itinerary

Travel itinerary
When you travel around the world you pass though different airports.

TRN -> FCO -> JFK
And then return back to home

JFK - TRN
In order to propose the unique list of airports that your trip uses we have to create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.

For example, a trip with:

[TRN-FCO] [FCO-JFK] [JFK-TRN]
Should be represented as:

TRN-FCO-JFK-TRN
That is the unique list of airport steps.

Now in our database we save the travel as a list of objects with in/out properties and you will receive that list always sorted in the right way.

[
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]
Now we have to create a helper function itinerary for JS that extract the unique airport list:

travel = itinerary([
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]); // TRN-FCO-JFK-FCO
Or a helper class Route for C#/C++:

Will the argument passed into the function always be an array of objects?
Will the return always be a string?

console.log(itinerary([{in: "TRN", out: "FCO"}]), "TRN-FCO");
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "CIA", out: "JFK"}]), "TRN-FCO-CIA-JFK");
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "FCO", out: "JFK"}]), "TRN-FCO-JFK");
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "CIA", out: "TRN"}]), "TRN-FCO-CIA-TRN");
console.log(itinerary([{in: "TRN", out: "FCO"}, {in: "FCO", out: "TRN"}]), "TRN-FCO-TRN");

TODO:
iterate over array
save the values of the current object into a variable as an array
if i is greater than 0, save the values of the object in the previous slot into a variable as an array, else return an empty array
return true or false if the last element in prevVals is equal to the first element in currVals
if it's true return currVals slices from the 1st indexed elment onward
else return currVals as is
flatten the array
join to string by -
*/

const itinerary = travel => 
  travel
    .map((curr, i, arr) => {
      const currVals = Object.values(curr);
      const prevVals = i > 0 ? Object.values(arr[i - 1]) : [];
      const isOverlap = prevVals.at(-1) === currVals[0];
      return isOverlap ? currVals.slice(1) : currVals;
    })
    .flat()
    .join('-');