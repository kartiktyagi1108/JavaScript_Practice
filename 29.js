  // how to clone array

  let array1 = ["item1" , "item2"];
//   let array2 = ["item1" , "item2"];
//   let array2 = array1.slice(0);
//  let array2 = [].concat(array1);

//new way
// spread operator
let array2 = [...array1];

  array1.push("item3");

  console.log(array1===array2);  // not equal because the have different address
  console.log(array1);
  console.log(array2);


   // clone + concat

let a1 = ["i1","i2"];
//let a2 = a1.slice(0).concat(["i3","i4"]);
//let a2 = [].concat(a1,["i3","i4"]);
//let a2 = [...a1,"i3","i4"];

let oneMoreArray = ["i3","i4"];
let a2 = [...a1,...oneMoreArray];

console.log(a1);
console.log(a2);