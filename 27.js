  // Array push pop

       // push pop are faster than shift unshift

  let fruits = ["apple" , "mango" , "grapes"];

  // push  ----> Add new element in the end of the array

  fruits.push("banana");
  //console.log(fruits.push("banana"));   -----> print index of banana
  console.log(fruits);


  // pop  ----> delete last element of the array


  fruits = ["apple" , "mango" , "grapes"];  // re-decleration of the same array

//   console.log(fruits.pop());
  let poppedFruit = fruits.pop();
  console.log(fruits);

  console.log("popped fruit is " , poppedFruit);


    // Array unshift shift

    // unshift   ----> Add new element in the starting of the array

    fruits = ["apple" , "mango" , "grapes"];  // re-decleration of the same array
    fruits.unshift("lichi");
    console.log(fruits);


    // shift  ----> delete first element of the array

    fruits = ["apple" , "mango" , "grapes"];  // re-decleration of the same array

    //console.log(fruits.shift());
    let removedFruit = fruits.shift();
    console.log(fruits);
    console.log("removed fruits is " , removedFruit);