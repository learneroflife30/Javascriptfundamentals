// Strings in detail

let day = "Monday ";

// to find length of characters in string
console.log(day.length);

// to slice the string
const word = day.slice(1, 4);
console.log(word);

// to find charcter at index
console.log(day[4]);

// to split the string, reduce white spaces
var newday = day.split("n");
console.log(newday[0]);
console.log(newday[1]);
var newperfectday = newday[1].trim();
console.log(newperfectday);
console.log(newperfectday.length);

// to convert string to number and perform actions on it
// parseint method is used to convert string to number
let firstnumber = "58";
let secondnumber = "39";
let finalnumber = parseInt(firstnumber) - parseInt(secondnumber);
console.log(finalnumber);
console.log(typeof finalnumber);
//tostring method is used to convert number to string
var convertedresult = finalnumber.toString();
console.log(typeof convertedresult);
