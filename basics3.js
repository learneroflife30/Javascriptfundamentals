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

// to add, use push or remove an element, use pop from array
marks.push(99); // it will add the number at the last
console.log(marks);
marks.pop(); // it will remove the last number
console.log(marks);
marks.unshift(1); // it will add number at the start of array
console.log(marks);
