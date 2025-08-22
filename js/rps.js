let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0 
  };

updateScoreElement();

function playGame(playerMove) {
  
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You lost.';
    } else if (computerMove === 'Scissors') {
      result = 'You won.';
    } 
  } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
      result = 'You won.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You lost.';
    }
  } else if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
        result = 'You lost.';
      } else if (computerMove === 'Paper') {
          result = 'You won.';
      } else if (computerMove === 'Scissors') {
          result = 'Tie.';
      }
  }
  
  if (result === 'You won.') {
    score.wins++;
  } else if (result === 'You lost.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerText = `${result}`;

  document.querySelector('.js-moves').innerHTML = `You: ${playerMove} Computer: ${computerMove}`;
}

function restartGame() {
  document.querySelector('.js-result').innerText = '';
  document.querySelector('.js-moves').innerText = '';
}

function updateScoreElement() {
  document.querySelector('.js-score').innerText = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
  let randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber <= 0.33) {
    computerMove = 'Rock';
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) { 
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  return computerMove;
}
