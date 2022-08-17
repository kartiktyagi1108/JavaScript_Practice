  // difference between dot and bracket notation

  const key = "mail";
  const person = {
    name:"Kartik",
    age:25,
     "person hobbies":["cricket","chess","ludo"]
     //person hobbies:["cricket","chess","ludo"]
    }

    console.log(person["person hobbies"]);
    //person["mail"] = "kartiktyagi1108@gmail.com";
    person[key] = "kartiktyagi1108@gmail.com";
    
    console.log(person);