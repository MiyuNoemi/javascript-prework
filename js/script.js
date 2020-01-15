
  function getWinner(player, computer){
    if(( computer === 'paper' && player === 'rock') || 
      (computer === 'scissors' && player === 'paper') || 
      (computer === 'rock' && argPlayerMove == 'scissors')) {
        return 'computer wins';
      } else if (computer === player) {
        return 'draw';
      } else {
        return 'player wins';
      }
    }
  
function startRound(playerChoice) {
  const playerMove = playerChoice;
  const computerMove = randComputerMove();
  const winner = getWinner(playerMOve, computerMove);
  document.querySelector('#messages').innerHTML+=`Round result: ${winner}`
}


function randComputerMove() {
const randomNumber = Math.floor(Math.random() * 3 + 1);
if(randomNumber === 1) return 'rock';
else if(randomNumber === 2) return 'paper';
else if(randomNumber === 3) return 'scissors';
}


document.querySelector('#play-paper').addEventListener('click', function(){
  startRound('paper');
});
document.querySelector('#play-rock').addEventListener('click', function(){
  startRound('rock');
});
document.querySelector('#play-scissors').addEventListener('click', function(){
  startRound('scissors');
});
