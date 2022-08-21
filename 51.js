  // default parameters

  function add(a,b)
  {
    return a+b;
  }
  console.log(add(3,7));                     // both parameters are defined



  function add1(a,b)                  
  {
    if(typeof b === "undefined")
    {
        b=0;                                        // by default 0
    }
    return a+b;
  }

  console.log(add1(4));                       // parameter b is not defined



  function add2(a,b=0)                         // by default 0
  {
    return a+b;
  }

  console.log(add2(9));                       // parameter b is not defined




  function add3(a,b)
  {
    return a+b;
  }
  console.log(add3(3));                   // parameter b is not defined ,it gives NAN