const summers = true;
const autumn = true;
const winters = true;

// if else loop runs for only one time - https://www.w3schools.com/js/js_if_else.asp

console.log("*** if, else if, else output below ***");

if (summers) {
  console.log("Its summer season in India");
} else if (!autumn) {
  console.log("It  autumn season in India");
} else if (!winters) {
  console.log("Its winters season in India");
} else {
  console.log("Its a mixed weather season in India");
}

console.log("*** While loop output below ***");
// We use while loop when we need a piece of code to keep on running till a condition is satisfied
let i = 0;
while (i < 10) {
  i++;
  console.log("The number is " + i);
}

let statement = true;
while (statement) {
  console.log(statement);
  statement = false;
}

console.log("*** Do While loop output below ***");
// We use do while loop when we want a piece of code to run atleast once before checking if a condition is satisfied or not
let k = 0;
do {
  k++;
} while (k > 5);
console.log(k);

console.log("*** For loop output below ***");
// for loop, use it when we know how many times we have to repeat loop
for (z = 0; z <= 10; z++) {
  console.log(z);
}

// 1. to find multiples of 2 and 5
// 2. to find multiples of 2 or 5
// 3. to find first 5 multiples of 5 and 10

console.log("*** to find multiples of 2 and 5 output below ***");

// using && to satisfy two scenarios
// = is used to assign a value and == is used to equate a value as same or not
for (a = 0; a <= 20; a++) {
  if (a % 2 == 0 && a % 5 == 0) {
    console.log(a);
  }
}

console.log("*** to find multiples of 2 or 5 output below ***");

// || operator to satsify either of the two values
for (b = 0; b <= 20; b++) {
  if (b % 2 == 0 || b % 5 == 0) {
    console.log(b);
  }
}

console.log("*** to find first 5 multiples of 5 and 10 output below ***");
// using nested if block
let d = 0;
for (c = 1; c <= 50; c++) {
  if (c % 5 == 0 && c % 10 == 0) {
    console.log(c);
    d++;
    if (d == 5) {
      break;
    }
  }
}
