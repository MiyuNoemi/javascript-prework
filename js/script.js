//komputer
let randomNumber = Math.floor(Math.random() * 3 + 1);

function getMoveName(argMoveId) {
if(argMoveId == 1){
  return 'kamień'
}
else if(argMoveId == 2){
  return 'papier'
}
else if(argMoveId ==3){
  return 'nożyce'
}
else 
return 'nieznany ruch'
}

printMessage('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove); */


//gracz 
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

 printMessage('Gracz wpisał: ' + playerInput);

 let argplayerMove = getMoveName(playerInput);

  /*if(playerInput == '1'){
     playerMove = 'kamień'; 
    }
 else if(playerInput == '2'){
    playerMove = 'papier'; 
  } 
 else if(playerInput == '3'){
    playerMove = 'nożyce'; 
  }*/


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

 if ( argComputerMove == `kamień` && argPlayerMove == `nieznany ruch`) {
    printMessage(`Spróbuj jeszcze raz`)
  }

  else if ( argComputerMove == `papier` && argPlayerMove == `nieznany ruch`) {
    printMessage(`Spróbuj jeszcze raz`)
  }

  else if ( argComputerMove == `nożyce` && argPlayerMove == `nieznany ruch`) {
    printMessage(`Spróbuj jeszcze raz`)
  } 

}