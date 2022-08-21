  // callback function

  function myFunc(a){
    console.log("Hello World");
  }
  myFunc();


  function myFunc1(a){
    console.log(a);
    console.log("Hello World");
  }
  myFunc1([1,2,3,4,5]);             // pass array as an argument


  function myFunc2(a){
    console.log(a);
  }
  myFunc2("abc");                   // pass string as an argument


  function myFunc3(a){
    console.log(a);
  }
  myFunc3({name : "kartik"});           // pass object as an argument


//========================================================================


  function myFunc111(name){
    console.log("Inside myFunc111");
    console.log(`Your name is ${name}`);
  }

  function myFunc222(callback){
    console.log("Hlw i am inside the myFunc222");
    callback("NARENDRA");                                   // callback function
  }

  myFunc222(myFunc111);