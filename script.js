'use strict';
/*
console.log(document.querySelector('.message').textContent);
displayMessage('Correct Number 🥳';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when they guess 0
  if(guess === 0){
    displayMessage('Number is out of the region');
    score--;
    document.querySelector('.score').textContent = score;
    return;
  }
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    //when guess is correct
  } else if (guess === secretNumber) {
    if (score > 1) {
      document.querySelector('.number').textContent = secretNumber;
      // document.querySelector('.message').textContent = 'Correct Number 🥳';
      displayMessage('Correct Number 🥳');
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      // document.querySelector('.message').textContent = '❌ Game Over';
      displayMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
    }
    //when the guess is incorrect
  } else if (guess !== secretNumber) {
   if (guess > secretNumber + 5 && guess < 21) {
    if (score > 1) {
      displayMessage('Guess is too high ⚠️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber - 5 && guess > 0) {
    if (score > 1) {
      displayMessage('Guess is too low ⚠️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber < guess && guess <= secretNumber + 5 && guess < 21) {
    if (score > 1) {
      displayMessage('Guess is a little higher 🤏');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber - 5 <= guess && guess < secretNumber && guess > 0) {
    if (score > 1) {
      displayMessage('Guess is a little lower 🤏');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ Game Over');
      document.querySelector('.score').textContent = 0;
    }
  } else {
    // document.querySelector('.message').textContent =
    //   'Number is out of the region';
    displayMessage('Number is out of the region');
  }
}});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
