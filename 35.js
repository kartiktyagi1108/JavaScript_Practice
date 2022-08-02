  // destructructuring

  const myArray = ["value1" , "value2" , "value3" ,"value4"];
  //let myvar1 = myArray[0];
  //let myvar2 = myArray[1];
  //console.log("value of myvar1 is",myvar1);
  //console.log("value of myvar2 is",myvar2);

  //let myNewArray = myArray.slice(2);


  let [myvar1,myvar2, ...myNewArray] = myArray;

  console.log("value of myvar1 is",myvar1);
  console.log("value of myvar2 is",myvar2);
  console.log(myNewArray);
  

  myvar1 = "value change";
  console.log("value of myvar1 is",myvar1);

  
  const a = ["v1","v2","v3"];
  let [a1,a2,a3,a4] = a;
  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);

 const b = ["i1","i2","i3"];

 let [b1,,b2] = b;  // skip i2 by using comas
 console.log(b1);
 console.log(b2);