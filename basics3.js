// Array is collection of elements
// Using square brackets we declare it
var marks = [20, 40, 60, 80];

// to access elements of marks array
let firstValue = marks[0];
console.log(firstValue);

// to reassign value of array
marks[0] = 30;
let newFirstValue = marks[0];
console.log(newFirstValue);

// to get length of array. Size starts with one
let size = marks.length;
console.log(size);

// to add, use push or remove an element, use pop from array, to add element at start use unshift
marks.push(99); // it will add the number at the last
console.log(marks);
marks.pop(); // it will remove the last number
console.log(marks);
marks.unshift(1); // it will add number at the start of array
console.log(marks);

// to find index of element present in a array using indexof
console.log(marks.indexOf(60));

// to find if element is present in array or not
console.log(marks.includes(80));
console.log(marks.includes(120));

// for loop to print all values present in array
for (let m = 0; m < marks.length; m++) {
  console.log(marks[m]);
}

// for loop to do sum of all elements in array
var sum = 0;
for (let m = 0; m < marks.length; m++) {
  sum = sum + marks[m];
}
console.log(sum);

// Reduce filter map, arrays methods

// Reduce - add
// Filter - divide
// map - multiply

// Reduce method to sum elements in an array.
let scores = [12, 18, 20, 22];
let totalscores = scores.reduce((score, sum) => score + sum, 0); // 0 at end means starting from zero
console.log("final is " + totalscores);

// Filter method to find even numbers in an array.
var cars = [20, 30, 40, 91, 19, 83, 17, 23, 48];
let evenCars = cars.filter((car) => car % 2 == 0);
console.log("Following are the even number plate cars " + evenCars);

// to mulitply even numbered array with 3
let evenNumberedCars = evenCars.map((Cars) => Cars * 3);
console.log(evenNumberedCars);

// to find even numbers in new array
const finalCars = evenNumberedCars.filter((evennumcar) => evennumcar % 2 == 0);
console.log(finalCars + " is final number of Cars");

// find sum of finalCars
const tc = finalCars.reduce((sum, finalCar) => sum + finalCar, 0); // Sum is inititalized to 0
console.log(tc);

// arrays chaining
var dates = [10, 21, 87, 40, 99, 110, 83];

//find even dates       //multiple them with 3     //sum them
const finalDate = dates
  .filter((value) => value % 2 == 0)
  .map((value) => value * 3)
  .reduce((sum, value) => sum + value, 0);

console.log(finalDate);

// to sort an array containing strings and numbers in ascending and descending order

var fruits = ["oranges", "watermelon", "apple", "banana"]; // for strings
var marks = [99, 87, 101, 2, 21, 10]; // for ascending order
var totalmarks = [120, 110, 100, 90]; // for descending order

// For strings
// sort method sorts in ascending order
// reverse method sorts in descending orde
console.log(fruits.sort());
console.log(fruits.reverse());

// For numbers
let ascendnumbers = marks.sort((a, b) => a - b);
let descendnumbers = totalmarks.sort((a, b) => b - a);
console.log(ascendnumbers);
console.log(descendnumbers);
