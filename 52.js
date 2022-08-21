  //  rest parameters

  function myFunc(a,b,c)
  {
    console.log(a);
    console.log(b);
    console.log(c);

    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
  }
  myFunc(2,3,4);



  function myFunc1(a,b,...c)
  {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);              // print as a string
    console.log(c);              // print as an array
    console.log(`c is`,c);                // print as an array
  }
  myFunc1(50,60,70,80,90,0,30,50);




  function addAll(...numbers)                // rest parameters
  {
    let sum = 0;
    for(let number of numbers)
    {
        sum = sum + number;
    }
    return sum;
  }
  console.log(addAll(1,2,3,4,5,6,7));