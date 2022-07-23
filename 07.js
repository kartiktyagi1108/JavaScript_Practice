// trim()

let firstName = "    kartik  Tyagi    ";
console.log(firstName);
console.log(firstName.length);
firstName.trim();  // Remove the spaces from both end of the string and make a new string
console.log(firstName.length);  //length after trim is also same

let newString = firstName.trim();
console.log(newString.length);

 firstName = firstName.trim();          // reassign the trimed value in same variable
console.log(firstName.length);


// toUpperCase()

let mYName = "Manikant";
console.log(mYName.toUpperCase());  //It gives new string
console.log(mYName);     //Print old string as it is

//  toLowerCase()

mYName = "MaNIKANT";
console.log(mYName.toLowerCase());  // It gives new string in lower case
console.log(mYName);  //Print old string as it is

// slice

let newName = "Deoband";
console.log(newName.slice(0,5));   //  Print new string 'Deoba'
//  slice not include last index mentioned
console.log(newName);  //  Print old string

