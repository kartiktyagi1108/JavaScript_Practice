  // find method

  const myArray = ["Hello" , "cat" , "dog" , "Lion"];

  function isLength3(string){
    return string.length === 3;
  }

  console.log(isLength3("dog"));
  console.log(isLength3("doggyy"));


//   const ans = myArray.find((string)=>string.length===3)
  const ans = myArray.find(isLength3);
  console.log(ans);


  const users = [
    {userId: 1, userName: "kartik"},
    {userId: 2, userName: "anshu"},
    {userId: 3, userName: "nitin"},
    {userId: 4, userName: "arun"},
    {userId: 5, userName: "neeraj"}
  ];

  const myUser = users.find((user)=>user.userId===3);
  console.log(myUser);