// basic javascript hello world program to print
// command to run the program = node filename.js

console.log("Hello World!");

// double slashes to write a single line comment which won't be printed in output

/* 
to write 
multiple lines comment which wont be printed in output
*/

// In javascript variables let var and const, are losely typed which means they can hold value of any type of data

// let and const were introduced from ES6 engine to represent variables

// use let variable mostly

// for integers
let a = 4;
console.log(a);

let b = 234.6;
console.log(b);

let c = a + b;
console.log(c);

// for strings
let city = "Chandigarh";
console.log(city);

//var is used when we have to redeclare value

// for string
var person = "Divyanshu";
console.log("name of person is " + person);

// to know type of variable using typeof method
console.log(typeof a);
console.log(typeof b);
console.log(typeof person);
console.log(typeof city);

// We cannot redeclare varibale with let keyword but possible with var
var person = "Kumar";
console.log(person);

// We can reassign value with let or var keyword
person = "Sharma";
console.log(person);

// We can use const keyword when we know value of variable won't be changed
const personalityofperson = "honest";
console.log(personalityofperson);

// Boolean value scenario
let availability = true;
console.log(availability);
console.log(typeof availability);

// negation (!) operator to print opposite of declared boolean value, not operator only applies to boolean value
console.log(!person);
