
function playGame(playerInput){
  clearMessages();

  
function getMoveName(randomNumber) {
  if(randomNumber == 1){
  return 'kamień'
}
else if(randomNumber == 2){
  return 'papier'
}
else if(randomNumber ==3){
  return 'nożyce'
}
else 
return 'nieznany ruch'
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
printMessage('Ruch komputera to :' + argComputerMove)

let argplayerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove); 

  function displayResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  else if ( argComputerMove == `papier` && argPlayerMove == `nożyce`) {
    printMessage(`Ty Wygrywasz!`)
  }
  else if ( argComputerMove == `kamień` && argPlayerMove == `nożyce`) {
    printMessage(`Ja Wygrywam!`)
  } 
  else if ( argComputerMove == argPlayerMove) {
    printMessage(`Remis!`)
  }
  else if (
    argComputerMove == "papier" &&
    argPlayerMove != 1 &&
    argPlayerMove != 2 &&
    argPlayerMove != 3 
  )
  {
    printMessage("Nieznany ruch");
  }
  else{
    printMessage("Ty wygrywasz");
  }
}
  displayResult(argComputerMove, argPlayerMove)
}

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
