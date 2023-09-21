'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const refreshGuess = function () {
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
};

const myGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('You have not chosen');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('You win');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore > score) {
      highScore = highScore;
    } else {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber && guess >= 1 && guess <= 20) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      refreshGuess();
    } else {
      displayMessage('You lose');
      document.querySelector('body').style.backgroundColor = '#DC143C';
      refreshGuess();
    }
  } else {
    if (score > 1) {
      displayMessage('Invalid guess');
      score -= 3;
      refreshGuess();
    } else {
      displayMessage('You lose');
      document.querySelector('body').style.backgroundColor = '#DC143C';
      score = 0;
      document.querySelector('.score').textContent = score;

      document.querySelector('.left').style.opacity = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', myGuess);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    myGuess();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.left').style.opacity = 1;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
