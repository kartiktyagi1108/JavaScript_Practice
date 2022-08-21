  // block scope vs function scope

  // let and const are block scope            ----> block scope means between the { } braces
  // var is function scope                    ----> function scope means complete window

  {
    var firstName = "kartik";
    console.log(firstName);
  }
  console.log(firstName);


  {
    let firstName1 = "Vishant";
    console.log(firstName1);
  }
  //console.log(firstName1);           ERROR


  {
    const firstName2 = "Sarthak";
    console.log(firstName2);
  }
  //console.log(firstName2);           ERROR