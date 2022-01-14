const prompt = require("prompt-sync")({ sigint: true });

let goal = 0;
let guesses = [];
let guessCount = 0;
let correctInput = false;

const newGame = () => {
  let endProgram = false;

  while (!endProgram) {
    console.log('*** Play again? ***');
    console.log('******* y/n *******\n');
    let response = prompt('> ');
    if (response === 'y') {
      startGame();
    } else if (response === 'n') {
      endProgram = true;
    }
  }
};

const startGame = () => {
  goal = Math.floor(Math.random() * 50) + 1;
  guesses = [];
  guessCount = 0;
  correctInput = false;
  
  console.log('\n** NUMBER ** GUESSING ** GAME **\n');

  while (!correctInput) {
    console.log('Guess a number between 1 and 50!');
    let input = prompt('> ');
    input = Number(input);

    const update = () => {
      guessCount++;
      guesses.push(input);
    };

    if (guesses.includes(input)) {
      update();
      console.log('\nYou\'ve already tried that one. Focus!\n');

    } else if (input < goal) {
      update();
      console.log('\nToo low!\n');

    } else if (input > goal) {
      update();
      console.log('\nToo high!\n');

    } else if (isNaN(input)) {
      update();
      console.log('\nThat isn\'t a number. Get it together!\n');

    } else if (input === goal) {
      update();
      if (guessCount === 1) {
        console.log('\nYou got it on the first try?! AMAZING!!\n');
      } else if (guessCount <= 5) {
        console.log(`\nYou're good at this! You got it in ${guessCount}!\n`);
      } else {
        console.log(`\nGreat job! You got it on guess number ${guessCount}!\n`);
      }
      correctInput = true;
    }
  }
  newGame();
};

startGame();






