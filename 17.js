   // Nested if else

  // winning number is 19

  // 19  your guess is right
  // 17 too low
  // 20 to high

  
   let winningNumber = 19;
   let userGuess = +prompt("Guess a number");   //By default prompt convert the input into string , to make the input again a number here we use + sign

   if(userGuess === winningNumber)
   {
       console.log("your guess is right !!");
   }
   else
   {
        if(userGuess < winningNumber)
        {
            console.log("too low !!!");
        }
        else
        {
            console.log("too high !!!");
        }
   }