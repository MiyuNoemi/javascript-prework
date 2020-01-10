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
return 'Nie znam ruchu'
}

printMessage('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){

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

    
  }

 
//   if( computerMove == 'kamień' && playerMove == 'papier'){
//     printMessage('Ty wygrywasz!');
//   }

//   else if ( computerMove == `kamień` && playerMove == `nożyce`) {
//     printMessage(`Ja Wygrywam!`)
//   }

//   else if ( computerMove == `kamień` && playerMove == `kamień`) {
//     printMessage(`Remis!`)
//   } 

//   else if ( computerMove == `papier` && playerMove == `papier`) {
//     printMessage(`Remis!`)
//   }

//   else if ( computerMove == `nożyce` && playerMove == `nożyce`) {
//     printMessage(`Remis!`)
//   }

//  if ( computerMove == `kamień` && playerMove == `nieznany ruch`) {
//     printMessage(`Spróbuj jeszcze raz`)
//   }

//   else if ( computerMove == `papier` && playerMove == `nieznany ruch`) {
//     printMessage(`Spróbuj jeszcze raz`)
//   }

//   else if ( computerMove == `nożyce` && playerMove == `nieznany ruch`) {
//     printMessage(`Spróbuj jeszcze raz`)
//   } 