// objects reference type 
// arrays are good but not sufficient
// for real world data
// objects store kek value pair
// objects don't have index
//  by default all keys are in string  so we can also write the keys in inverted comas like string
// space in the naming of key is not work in dot notation but works in square notation

// how to create an object

     //const person = {name:"Kartik",age:25};
     //console.log(typeof person,person);

     //console.log(person.name); // access data from object
    //console.log(person.age);  // access data from object

    const person = {
    name:"Kartik",
    age:25,
    hobbies:["cricket","chess","ludo"]
    }
    console.log(person); 

    console.log(person["name"]);  // square bracket notation
    //console.log(person.hobbies);
    //console.log(person.hobbies[1]);

// how to add key value pair to objects
    //person.gender = "male";
    person["gender"] = "male";  // square bracket notation
    //console.log(person);
