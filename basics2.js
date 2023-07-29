const summers = true;
const autumn = true;
const winters = true;

// if else loop runs for only one time - https://www.w3schools.com/js/js_if_else.asp

if (summers) {
  console.log("Its summer season in India");
} else if (!autumn) {
  console.log("It  autumn season in India");
} else if (!winters) {
  console.log("Its winters season in India");
} else {
  console.log("Its a mixed weather season in India");
}

// While, do while loops
//https://www.w3schools.com/jsref/jsref_dowhile.asp

// We use while loop when we need a piece of code to keep on running till a condition is satisfied
let i = 0;
while (i < 10) {
  i++;
  console.log("The number is " + i);
}

// We use do while loop when we want a piece of code to run atleast once before checking if a condition is satisfied or not
let k = 0;
do {
  k++;
} while (k > 5);
console.log(k);
