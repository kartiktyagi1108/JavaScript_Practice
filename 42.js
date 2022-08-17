  // objects inside array
  // very useful in real world application

  const users = [
    {userId: 1, firstName: "Kartik", gender: "male"},
    {userId: 2, firstName: "Vishant", gender: "male"},
    {userId: 3, firstName: "Sarthak", gender: "male"}
  ] 
  console.log(users);

  for(let user of users){
    console.log(user);
  }

  for(let user of users){
    console.log(user.firstName);
  }