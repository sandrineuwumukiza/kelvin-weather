// ASSIGNMENT ONE OT WEATHER KELVIN
// const kelvin = 293;
const kelvin = 0;
// creating variable kelvin and assign a value to it
const celcius =  kelvin -273 ;
// variable celcius is create which will help us to convert from kelvin to celcius
let fahrenheit = celcius * (9/5) + 32 ;
fahrenheit = Math.floor(fahrenheit);
// the above variable created fahrenheit will help to change from celcius to Fahrenheit
// fahrenheitis reassigned to onather value in in order to round th point which will exist in the using the formula
// Math.floor() will help to round down the result from fahrenheit
console.log(`The temperature is  ${fahrenheit} degrees Fahrenheit.`);

// extra practice for wether kelvin
// convert Newton to celcius 
let celciusNewton = 300;
let newton = celcius * (33/100);
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees`)


