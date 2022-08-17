  // functions
  //call = invoke = run  all are same
  // dry  ----> don't repeat yourself

  function sum(){
    console.log(2+5);
  }

  sum();


  function sum2(){
    return(3+7);
  }

  console.log(sum2());
  //const returnedValue = sum2();
  //console.log(returnedValue);


    // By passing parameters in the function


function add(num1 , num2 , num3){       //  num1 and num2 are parameters
    return(num1+num2+num3);
}

console.log(add(4,9,6));             //  4 , 9 and 6 are arguments

console.log(add(3,8))                 // one argument is not given so it gives NAN


  // isEven
  // input : 1 number
  // outout : true , false

  function isEven(num){
    if(num % 2 === 0)
    {
        console.log("true");
    }
    else{
        console.log("false");
    }
  }

  isEven(23);
  isEven(20);


  function isEven1(num){
    if(num % 2 === 0){
    return true;
    }
    return false;
  }

  console.log(isEven1(45));


  function isEven2(num){
    return num % 2 === 0;
  }

  console.log(isEven2(9));

  
    // function
    // input : string
    // output : firstCharacter

    function firstChar(anyString){
      return anyString[0];
    }

    console.log(firstChar("kartik"));


      // function
      // input : array , target (number)
      //output : index of target present in array

      function findTarget(array,target){
        for(let i = 0 ; i < array.length ; i++)
        {
          if(array[i] === target)
          {
            return i;
          }
        }
        return -1;
      }


      console.log(findTarget([2,3,4,5],9));
      
      // const myArray = [2,3,4,5];
      // const ans = findTarget(myArray,8);
      // console.log(ans);
