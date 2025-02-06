// // Create your game here!
// let targetNum = 50;
// let guessNum = 2;

// while (guessNum > 0) {
//   let userInput = prompt("Guess a number between 1 and 50:");
//   userInput = parseInt(userInput)
//   console.log (userInput)
//   if (userInput === targetNum) {
//     console.log(" Goood guess, you won this game");
//   } else if (guessNum > targetNum) {
//     console.log("Your guess is too high");
//     guessNum --;
//   } else if (userInput < targetNum) {
//     console.log("Your guess is too low");
//     guessNum--;
//   }
// }
//   if (guessNum === 0) {
//     console.log("Game is over");
//   }

//   const targetNum = 3;
//   let numberOfGuesses = 2;
//   let gameOver = false;
  
  
  
  
  while(numberOfGuesses > 0 && !gameOver) {
      setTimeout(() => {
          const userInput = parseInt(prompt("Please enter a number between 1-100"));
          console.log(userInput);
  
          if (userInput > targetNum) {
              alert(`Your guess ${userInput} is too high!`)
          } else if (userInput < targetNum) {
              alert(`Your guess ${userInput} is too low!`)
          } else if (userInput === targetNum) {
              alert(`Congrats you guessed it right! ${userInput} was the number.`);
              gameOver = true;
          }
  
  
      }, 0);
  
      numberOfGuesses--; // decrease by 1
  };