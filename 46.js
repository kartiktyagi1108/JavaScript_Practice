  // Arrow functions


//   const sum = function()      //   ----> function expression    , store function in a valiable
// {
//     return(3+7);
// }


const sum = () => (3+7);     // no curly braces and return required for single line content

console.log(sum());


// const add = function(num1 , num2 , num3)       //   ----> function expression
// {
    // return(num1+num2+num3);
// }

const add = (num1 , num2 , num3) =>   
 {
     return(num1+num2+num3);
 }

console.log(add(4,9,6));


// function isEven2(num){
    // return num % 2 === 0;
//   }


const isEven = num =>             // no need for paranthesis for single parameter
{
    return num % 2 === 0;
}
  console.log(isEven(9));


//   const firstChar = function(anyString)
// {
    // return anyString[0];
// }


const firstChar = (anyString) =>
{
    return anyString[0];
}

  console.log(firstChar("kartik"));