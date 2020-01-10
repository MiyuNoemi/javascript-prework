//komputer
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(playerInput == '2'){
  playerMove = 'papier';
}

else if(playerInput == '3'){
  playerMove = 'nożycze';
}