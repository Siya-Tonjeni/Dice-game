// Splash page to dissapear and appear main page
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 6000);
});

 //Editing players names
 let player1 = "Player1";
 let player2 = "Player2";

 function editPlayer() {

let player1 = prompt("Input Player 1 name");
let player2 = prompt("Input Player 2 name");
   if (player1 == 0 || player2 == 0) {
    alert("Input player name");
   }

   document.querySelector("p.Player1").innerHTML = player1;
   document.querySelector("p.Player2").innerHTML = player2;
}


// Roll the dice function
function rollDice() {
    // Generate random numbers between 1 and 6 for both players
    var player1Roll = Math.floor(Math.random() * 6) + 1;
    var player2Roll = Math.floor(Math.random() * 6) + 1;

    // Update the dice images for both players
    document.querySelector('.dice-player-one').src = 'images/dice' + player1Roll + '.png'; // Concatenating the source of the image to replace with
    document.querySelector('.dice-player-two').src = 'images/dice' + player2Roll + '.png'; // e.g images/dice3.png

    // Determine the winner and update the h1 element
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




