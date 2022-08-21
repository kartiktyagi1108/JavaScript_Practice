  // lexical scope


  const myVar = "value1"

  function myApp()
  {
    //const myVar = "value2";

    function myFunc1()
    {
      //const myVar = "value3";

      const myFunc2 = function()
      {
        //const myVar = "value4";

        const myFunc3 = () => 
        {
          //const myVar = "value5";

          console.log("Inside myFunc3" , myVar );
        }
        console.log("Inside myFunc2",myVar);
        myFunc3();
      }
      console.log("Inside myFunc1",myVar);
      myFunc2();
    }
    console.log("Inside myApp",myVar);
    myFunc1();
  }
  myApp();