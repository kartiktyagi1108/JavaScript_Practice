//  Important array methods

// forEach method    ----> not change original array

const numbers = [5,6,8,9,3];
function myFunc(number,index){
    console.log(`index is ${index} number is ${number}`);
}

// for(let i=0 ; i<numbers.length ; i++){
    // myFunc(numbers[i],i);
// }


numbers.forEach(myFunc);            // it works like a for loop for functions

//======================================================================

//numbers.forEach(function(number , index){
//        console.log(`index is ${index} number is ${number}`);
//});


numbers.forEach(function(number){
    console.log(number*2);                           // multiply every number by 2 of numbers array
});






const users = [
    {firstName : "Kartik"},
    {firstName : "Vishant"},
    {firstName : "Raghav"},
    {firstName : "Sarthak"}
]

users.forEach(function(user){
    console.log(user.firstName);
});

users.forEach((user , index)=>{
    console.log(user.firstName , index);
});


// for(let user of users){
    // console.log(user.firstName);
// }