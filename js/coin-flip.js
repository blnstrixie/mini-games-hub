  let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
  };

  updateScoreElement();

function coinFlip(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Heads' && computerMove === 'Heads') {
    result = 'You won.';
  } else if (playerMove === 'Heads' && computerMove === 'Tails') {
    result = 'You lost.'
  } else if (playerMove === 'Tails' && computerMove === 'Heads') {
    result = 'You lost.';
  } else if (playerMove === 'Tails' && computerMove === 'Tails') {
    result = 'You won.';
  }

  if (result === 'You won.') {
    score.wins++;
  } else if (result === 'You lost.') {
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerText = result;

  document.querySelector('.js-moves').innerText = `You: ${playerMove} Computer: ${computerMove}`;
}

function restartGame() {
  document.querySelector('.js-result').innerText = '';
  document.querySelector('.js-moves').innerText = '';
}

function updateScoreElement() {
  document.querySelector('.js-score').innerText = `Wins: ${score.wins} Losses: ${score.losses}`;
}

function pickComputerMove() {
  let randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber < 0.5) {
    computerMove = 'Heads';
  } else {
    computerMove = 'Tails';
  }

  return computerMove;
}