// Create your game here!
let targetNum = 50;
let guessNum = 2;

while (guessNum > 0) {
  let userInput = prompt("Guess a number between 1 and 50:");
  userInput = parseInt(userInput)
  console.log (userInput)
  if (userInput === targetNum) {
    console.log(" Goood guess, you won this game");
  } else if (guessNum > targetNum) {
    console.log("Your guess is too high");
    guessNum --;
  } else if (userInput < targetNum) {
    console.log("Your guess is too low");
    guessNum--;
  }
}
  if (guessNum === 0) {
    console.log("Game is over");
  }

