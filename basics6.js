// Object is collection of properties

let person = {
  firstName: "Divyanshu",
  lastName: "Sharma",
};

// to get property of Object
console.log(person.firstName);
console.log(person.lastName);

// to update property of object
person.firstName = "Divyanshu Kumar";
person.lastName = " Sharma";

console.log(person.firstName);
console.log(person.lastName);

// to delete property of Object
delete person.firstName;
person.gender = "male";
console.log(person);

// to check if property is present in object or not
console.log("height" in person);
console.log("firstName" in person);
console.log("lastName" in person);
