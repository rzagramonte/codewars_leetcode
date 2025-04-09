/*
Grasshopper - Debug

Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:

celsius = (fahrenheit - 32) * (5/9)
Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

Will the input be two functions?
Will one of the functions be a helper function?
If correctly debugged, should the return be a string?

console.log(weatherInfo(50), '10 is above freezing temperature');
console.log(weatherInfo(23),  '-5 is freezing temperature');
*/

//declare const variable and assign to arrow function
//set parameter
//return temperature in celsius
const convertToCelsius = temperature => (temperature - 32)  * (5/9);

//declare const variable and assign to arrow function
//set parameter
//return correct string using ternary operator
//is the temperature in celsius less than 0 ? then return string stating 'temp is freezing temperature'
//else return string stating 'temp is above freezing temperature'
const weatherInfo = temp => convertToCelsius(temp) < 0 ? `${convertToCelsius(temp)} is freezing temperature` : `${convertToCelsius(temp)} is above freezing temperature`;

