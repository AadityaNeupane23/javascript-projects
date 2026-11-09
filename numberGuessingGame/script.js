// Number Guessing Game

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = prompt(`Guess a number between ${min} and ${max}:`);
  guess = Number(guess);

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < min || guess > max) {
    alert(`Number must be between ${min} - ${max}.`);
  } else {
    attempts++;
    if (guess < answer) {
      alert("Too low! Try again.");
    } else if (guess > answer) {
      alert("Too high! Try again.");
    } else {
      alert(
        `Congratulations! You've guessed the number ${answer} in ${attempts} attempts.`,
      );
      running = false;
    }
  }
}
