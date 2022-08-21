  // parameter destructuring

 
  const person = {
    firstName : "Kartik",
    gender : "male"
  }


  function printDetails(obj){                // declare obj as a parameter in case of object
    console.log(obj.firstName);
    console.log(obj.gender);
  }
  printDetails(person);                    // declare function name as an argument




  function printDetails1(firstName,gender){                 // parameter destructuring
    console.log(firstName);
    console.log(gender);
  }

  printDetails(person);