// Splash page to dissapear and appear main page
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 6000);
});


 //Editing players names
const editButton = document.getElementById('btn-text');

const playerNames = document.querySelectorAll('.Player1, .Player2');

// Add click event listener to the edit button
editButton.addEventListener('click', () => {
  const player1Name = prompt("Enter new name for Player 1:");
  const player2Name = prompt("Enter new name for Player 2:");

  if (player1Name) {
    playerNames[0].textContent = player1Name;
  }

  if (player2Name) {
    playerNames[1].textContent = player2Name; 
  }
});

// Roll the dice function
function rollDice() {
    // Generate random numbers between 1 and 6 for both players
    var player1Roll = Math.floor(Math.random() * 6) + 1;
    var player2Roll = Math.floor(Math.random() * 6) + 1;

    // Update the dice images for both players
    document.querySelector('.dice-player-one').src = 'images/dice' + player1Roll + '.png'; // Concatenating the source of the image to replace with
    document.querySelector('.dice-player-two').src = 'images/dice' + player2Roll + '.png'; // e.g images/dice3.png

    // Determine the winner and update the h1 element
    const player1 = playerNames[0].textContent;
    const player2 = playerNames[1].textContent;
    var resultText = '';
    if (player1Roll > player2Roll) {
      resultText = player1 +' Wins';
    } else if (player2Roll > player1Roll) {
      resultText = player2+' Wins!';
    } else {
      resultText = "It's a Draw!";
    }

    document.querySelector('h1').textContent = resultText;
  }

 // Restart Function button 
function restartGame() {
  // Change to default dice image
  document.querySelector('.dice-player-one').src = 'images/dice6.png'; 
  document.querySelector('.dice-player-two').src = 'images/dice6.png';

  // Set Default names
  playerNames[0].value = 'Player 1'; 
  playerNames[1].value = 'Player 2';
  document.querySelector('h1').textContent = "Let's Play"; 
  document.querySelector('.Player1').textContent = "Player 1";
  document.querySelector('.Player2').textContent = "Player 2";

  //Set edit player button to default
  editPlayerButton.textContent = 'EDIT PLAYER NAMES';

  // Reset edit mode
  if (!playerInputs[0].classList.contains('hidden')) { 
    editPlayer(); 
  }
}
const restartButton = document.getElementById('restart-btn');

// Add event listener to the restart button
restartButton.addEventListener('click', restartGame);



