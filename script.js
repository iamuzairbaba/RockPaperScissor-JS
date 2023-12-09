let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
  losses : 0,
  tie : 0
  };
  updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "It is a TIE";
    } else if (computerMove === "paper") {
      result = "You LOST";
    } else {
      result = "You WON";
    }
  } 
  else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You WON";
    } else if (computerMove === "paper") {
      result = "It is a TIE";
    } else {
      result = "You LOST";
    }
  } 
  else if (playerMove === "scissors") {

    if (computerMove === "rock") {
      result = "You LOST";
    } else if (computerMove === "paper") {
      result = "You WON";
    } else {
      result = "It is a TIE";
    }
  }
  if(result === 'You WON'){
    score.wins += 1;
  }else if(result === 'You LOST'){
    score.losses += 1;
  }else if(result === 'It is a TIE'){
    score.tie += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();
  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves').innerHTML = `You picked <img src="${playerMove}-emoji.png">. Computer picked <img src="${computerMove}-emoji.png">.`

  //alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
  //           Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.tie}`)
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.tie}`;
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}