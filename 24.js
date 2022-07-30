  // break keyword

  for(let i = 1;i<=10;i++)
  {
    if(i===5)
    {
        break;
    }
    console.log(i);  // After the execution of break this statement can't be run
  }
  console.log("hello");


    // Continue keyword


    for(let j = 1;j<=10;j++)
    {
      if(j===5)
      {
          continue;  // It skips 5 and then continue
      }
      console.log(j);  
    }
    console.log("hello");