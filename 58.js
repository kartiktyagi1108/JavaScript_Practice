  // filter method

  // not change original array , it makes new array

  const numbers = [1,2,3,4,5,6,7,8,9];

  const isEven = function(number){
    return number%2===0;
  }

  const evenNumbers = numbers.filter(isEven);
  console.log(evenNumbers);


  // arrow function

  const evenNumbers1 = numbers.filter((number)=>{
    return number % 2 === 0;
  });

  console.log(evenNumbers1);




  const isOdd = function(number){
    return number%2!==0;
  }

  const oddNumbers = numbers.filter(isOdd);
  console.log(oddNumbers);
