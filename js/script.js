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

 let argplayerMove = getMoveName(randomNumber);

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
 
  if( argComputerMove == 'kamień' && rgPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

  else if ( argComputerMove == `papier` && rgPlayerMove == `nożyce`) {
    printMessage(`Ty Wygrywasz!`)
  }

  else if ( argComputerMove == `kamień` && rgPlayerMove == `nożyce`) {
    printMessage(`Ja Wygrywam!`)
  } 

  else if ( argComputerMove == rgPlayerMove) {
    printMessage(`Remis!`)
  }

 if ( argComputerMove == `kamień` && rgPlayerMove == `nieznany ruch`) {
    printMessage(`Spróbuj jeszcze raz`)
  }

  else if ( argComputerMove == `papier` && rgPlayerMove == `nieznany ruch`) {
    printMessage(`Spróbuj jeszcze raz`)
  }

  else if ( argComputerMove == `nożyce` && rgPlayerMove == `nieznany ruch`) {
    printMessage(`Spróbuj jeszcze raz`)
  } 

}