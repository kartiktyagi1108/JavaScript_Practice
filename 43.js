  // nested destructuring

  const users = [
    {userId: 1, firstName: "Kartik", gender: "male"},
    {userId: 2, firstName: "Vishant", gender: "male"},
    {userId: 3, firstName: "Sarthak", gender: "male"}
  ] 

  //const [user1,user2,user3] = users;
  //console.log(user1);

  const [{firstName} , , {gender}] = users;
  console.log(firstName);
  console.log(gender);



  const [{firstName: user1firstName , userId} , , {gender: user3gender}] = users;
  console.log(user1firstName);
  console.log(userId);
  console.log(user3gender);