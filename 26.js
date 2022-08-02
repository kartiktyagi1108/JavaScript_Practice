  // Arrays (refrence type)
  // ordered collection of items
  // arrays are mutable ----> original array changes after any change

  let fruits = ["apple" , "mango" , "grapes"];
  console.log(fruits);
  console.log(fruits[2]);

  let numbers = [2,4,7,9];
  console.log(numbers);
  console.log(numbers[3]);

  let mixed = [2,4,1.6, "kartik" , null , undefined];
  console.log(mixed);
  console.log(mixed[4]);

  let fruits1 = ["guava" , "banana" , "lichi"];
  console.log(fruits1);

  fruits1[1] = "mango";  // change value of 1st index

  console.log(fruits1);   // Arrays are mutable

  console.log(typeof fruits1);  // check the data type of the array

  let obj = {};  // object literal
  console.log(typeof obj);

  console.log(Array.isArray(fruits1));  // checks the fruits1 is an array or not
  console.log(Array.isArray(obj));      // checks the obj is an array or not