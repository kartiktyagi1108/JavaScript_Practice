  // splice method
  // start , delete , insert

  const myArray = ["item1" , "item2" , "item3" , "item4" , "item5"];

  // delete

  const deletedItem = myArray.splice(2,1);
  console.log(deletedItem);                          // print deleted element
  console.log(myArray);

  // insert
  myArray.splice(3,0,'item00');
  console.log(myArray);

  // insert and delete

  const myArray1 = ["item10" , "item20" , "item30" , "item40" , "item50"];
  const ans = myArray1.splice(3,1,'item100');
  console.log(ans);
  console.log(myArray1);