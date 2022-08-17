  // function expression

//   function sum(){          ----> function decleration
//     return(3+7);
//   }

const sum = function()      //   ----> function expression    , store function in a valiable
{
    return(3+7);
}

console.log(sum());


//function add(num1 , num2 , num3)             ----> function decleration
//{
//    return(num1+num2+num3);
//}

const add = function(num1 , num2 , num3)       //   ----> function expression
{
    return(num1+num2+num3);
}

console.log(add(4,9,6));


// function isEven(num){                       ----> function decleration
    // return num % 2 === 0;
//   }


const isEven = function(num)                 //   ----> function expression
{
    return num % 2 === 0;
}
  console.log(isEven2(9));


//   function firstChar(anyString){
    // return anyString[0];
//   }

const firstChar = function(anyString)
{
    return anyString[0];
}

  console.log(firstChar("kartik"));