 // undefined

 // shows undefined when value is not assigned in the variable
 var str1;
 console.log(typeof str1 , str1);

 var str1 = "kartik";
 console.log(typeof str1 , str1);

 let str2;
 console.log(typeof str2 , str2);
 str2 = "rastam";
 console.log(typeof str2 , str2);

 console.log(typeof undefined);  // Type of undefined is undefined


   // null

let myVariable = null;
console.log(typeof myVariable , myVariable);  //typeof null is object which is a bug ,ERROR


// BigInt

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let myNumber = BigInt(123);  //Store large numbers with the help of BigInt
console.log(typeof myNumber , myNumber);

let sameMynumber = 125n;    // it also represents BigInt
console.log(typeof sameMynumber ,sameMynumber);

console.log(myNumber + sameMynumber);

//  We can't do any operation between a BigInt number and a simple number  ,give ERROR