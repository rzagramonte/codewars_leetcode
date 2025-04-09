/*
Chicken Sexing

Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. All of Bob's decisions will be checked against the expert's choices to generate a correctness score.

Scoring Rules
When they agree, he gets 1 point.
When they disagree but one has said '?', he gets 0.5 points.
When they disagree completely, he gets 0 points.

Will the arguments passed into the function always be two arrays of strings?
Will the return always be a number?

console.log(['M', 'F', '?'], ['M', 'F', '?'], 3);
console.log(['M', '?', 'M'], ['M', 'F', '?'], 2);
console.log(['F', 'M', 'F'], ['M', 'F', 'M'], 0);


TODO: reduce b, the first input array, to one value

*/

const correctness = (b,e) => b.reduce((a,c,i) => a + (c == e[i] ? 1 : c == '?' || e[i] == '?' ? .5 : 0), 0);