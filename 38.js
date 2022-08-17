  // how to iterate object

  const person = {
    name:"Kartik",
    age:25,
     "person hobbies":["cricket","chess","ludo"]
    }

    // for in loop

    for(let key in person)
    {
        //console.log(person[key]);  // print only values
        console.log(`${key} : ${person[key]}`);     //print key and value both
        //console.log(key, " : ",person[key]);
    }

    // object.keys

    console.log(Object.keys(person));  // give keys in the form of array
    const val = Array.isArray((Object.keys(person)));
    console.log(val);

    // for of loop

    for(let key of Object.keys(person)){
        console.log(person[key]);
    }