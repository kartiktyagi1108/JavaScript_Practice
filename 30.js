  // for loop in array

  let fruits = ["apple" , "mango" , "grapes" , "banana"];

  for(let i = 0; i < fruits.length; i++)
  {
    console.log(fruits[i]);
  }

  // upper case

   fruits = ["apple" , "mango" , "grapes" , "banana"];
   let fruits2 = [];

  for(let i = 0; i < fruits.length; i++)
  {
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());

  }

  console.log(fruits2);