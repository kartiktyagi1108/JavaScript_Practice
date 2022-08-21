  // function returning function


  function myFunc(){
    return 1;                               // Return number
  }

  console.log(myFunc());


  function myFunc5(){
    return "a";                             // Return string
  }

  console.log(myFunc5());


  function myFunc10(){
    return [1,2,3];                          // Return array
  }

  console.log(myFunc10());


  function myFunc20(){
    return {name : "Kartik Tyagi" , age : 20};              // Return object
  }

  console.log(myFunc20());

  //=============================================================================

  function myFunc30(){
    function hello(){
       console.log("HELLO WORLD");
       //return "HELLO WORLD";
    }
    return hello;
  }

  const ans = myFunc30();
  ans();                            // function returning function
  //console.log(ans());