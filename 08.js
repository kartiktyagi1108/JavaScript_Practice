  //  typeof operator

  // data types (Primitive data types)
      // string  "kartik"
      // number  2,3,4
      // booleans
      // undefined
      // null
      // BigInt
      // Symbol

let age = 22;
let firstName = "kartik";

console.log(typeof age);
console.log(typeof 22);
console.log(typeof firstName);
console.log(typeof "kartik");

console.log(typeof 5);        // without any decleration

// Convert number to string

newAge = age + "";  // Add an empty string to the number to make it string "" , " "
console.log(newAge);
console.log(typeof newAge);

// OR

let myStr = 60;                        // number
myStr = String(myStr);                 // number converted to string
console.log(typeof myStr);


// Convert string to number

myStr = +"45";   // + sign convert a string into number

console.log(typeof myStr);


// OR


age = "30";
age = Number(age);
console.log(typeof age);



