  // functions inside a function

  function app()
  {
    const myFunc = () =>{
        console.log("hello from myFunc");
    }

    const addTwo = (num1,num2) => {
        return num1+num2;
    }

    const mul = (num1,num2) => num1*num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(4,6));
    console.log(mul(5,5));
  }

  app();