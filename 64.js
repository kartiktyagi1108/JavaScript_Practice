  // fill method       --------> changes original array
  // value , start , end

  const myArray = new Array(10).fill(0);
  console.log(myArray);

  const myArray1 = [1,2,3,4,5,6,7,8,9];
  myArray1.fill(0,2,5);
  console.log(myArray1);