const prompt = require("prompt-sync")({ sigint: true });

let goal = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let correctInput = false;
let guesses = [];


while (!correctInput) {
  console.log('Guess a number between 1 and 100!');
  let input = prompt('> ');
  input = Number(input);

  const update = () => {
    guessCount++;
    guesses.push(input);
  };

  if (guesses.includes(input)) {
    update();
    console.log("You've already tried that one. Focus!");
    continue;
  }

  if (input < goal) {
    update();
    console.log('Too low!');
  }

  if (input > goal) {
    update();
    console.log('Too high!');
  }

  if (isNaN(input)) {
    update();
    console.log(`Are you serious? that isn't a number. Get it together!`);
  }

  if (input === goal) {
    update();
    console.log(`Great job! You got it on guess number ${guessCount}!`);
    correctInput = true;
  }
}

