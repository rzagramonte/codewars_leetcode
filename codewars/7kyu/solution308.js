/*
Digital Synesthesia

Setup
Synesthesia is a neurological phenomenon where a person may experience a sensory impulse as if it had been from a different sense. For example, hearing music as if seeing a series of colors.

Today we will be creating a function to mimic a synesthetic experience. The function will receive a string representing music, and return an array of strings representing colors.

To represent music as a string, we will be using the ABC music notation. This notation is a whole language, but all you need to know for this kata is that it is comprised of all ASCII characters. In it's simplest usage, "ABCEFG" is an ascending scale.

To represent color as a string, we will use standard CSS hex notation, e.g. #FFFFFF for white. Letters are upper case.

Task
Starting from the beginning of the input string, for every three ASCII characters, include the associated color in the returned array. If the input string is not evenly divisible by three, ignore any trailing characters. Empty and null input should return an empty array.

I define a color as being associated with three ASCII characters when each pair of hexadecimal digits in the color match the hexadecimal ASCII values of the respective characters. For example, #414243 is associated with the notes ABC.

Will the argument passed into the function be either an empty string, null, or a string?
Will the return always be an empty array or an array of strings?

console.log(MusicToColor("ABC").toString() == ['#414243'].toString());

TODO:
if music is falsy, return []
else return:
transform input into an array of strings containing 3 characters
iterate over array
replace each character w char code
transform to hex 16-base
transform to uppercase
*/

const MusicToColor = music => !music ? [] : music.match(/.{3}/g).map(e => '#' + e.replace(/./g, m => m.charCodeAt(0).toString(16).toUpperCase()));