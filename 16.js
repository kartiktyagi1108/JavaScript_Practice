  // AND  OR  operator

  let firstName = "kartik";
  let age = 22;

  if(firstName[0] === "k")
  {
      console.log("your name starts with k");
  }

  if(age > 18)
  {
      console.log("you are above 18");
  }

    // AND operator

if(firstName[0] === "k" && age > 18)        //both conditions can be true
{
    console.log("name start with k and above 18");
}    
else
{
    console.log("inside else");
}


   // OR operator

   if(firstName[0] === "k" || age > 18)        //One or both conditions can be true
   {
       console.log("name start with k and above 18");
   }    
   else
   {
       console.log("inside else");
   }   