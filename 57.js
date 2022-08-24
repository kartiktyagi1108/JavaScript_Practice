  // map method

  // map function makes new array , not change original array



const numbers = [4,6,8,9,2];

// const square = function(number){
    // return number * number;                                 // always use return in map function
// } 

// const squareNumber = numbers.map(square);                       // map makes new array
// console.log(squareNumber);




// const squareNumber = numbers.map(function(number){
    // return number * number;
// });

// console.log(squareNumber);






// const squareNumber = numbers.map((number)=>{                // using arrow function
    // return number * number;
// });

// console.log(squareNumber);







const squareNumber = numbers.map(function(number , index){
    return `index : ${index} , ${number * number}`;
});

console.log(squareNumber);






const users = [
    {firstName : "Kartik" , age : 21},
    {firstName : "Vishant" , age : 22},
    {firstName : "Raghav" , age : 23},
    {firstName : "Sarthak" , age : 24}
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);