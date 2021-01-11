// Game Function:
//    - player must guess a number between a min and max
//    - player gets a certain amount of guesses
//    - notify player of guesses remaining...
//    - notify the player of the correct answer if loose 
//    - let player choose to play again

// Game values
let min = 1, 
   max = 5,
   winningNum = getWinningNum(min, max), 
   guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e) {
   if (e.target.classList.contains('play-again')) {
      window.location.reload();
   }
})

//listen for guess
guessBtn.addEventListener('click', function() {
   // console.log(guessInput.value); 
   console.log(winningNum);
   
   //we need to parseInt as the output value comes as string...
   let guess = parseInt(guessInput.value);
   // console.log(guess);

   //validate
   //isNaN() checks for whether the value inside the box is "NaN" whcih means whether its empty or not
   if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }

   //check if won
   if (guess === winningNum) {
      //game over = won

      //Disable Input
      guessInput.disabled = true;
      //make the border green to show that they won
      guessInput.style.borderColor = 'green';
      //set message that the user won
      setMessage(`${winningNum} is correct! YOU WIN!`, 'green');

      //game reset
      guessBtn.value = 'Play Again';
      guessBtn.classList.add('play-again');
      // guessBtn.className = 'play-again';
   } else {
      guessesLeft -= 1;

      if (guessesLeft === 0) {
         // game over = lost

         //Disable Input
         guessInput.disabled = true;
         //make the border green to show that they won
         guessInput.style.borderColor = 'red';
         //set message that the user won
         setMessage(`Game over, you lost! The correct number was ${winningNum}`, 'red');

         //game over = play again
         guessBtn.value = 'Play Again';
         guessBtn.classList.add('play-again');
         // guessBtn.className = 'play-again';

      } else {
         //game continues = answer wrong

         guessInput.style.borderColor = 'orange';
         setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'orange');

         //clear input
         guessInput.value = '';
      }
   }
});


//set message
function setMessage(msg, color) {
   message.style.color = color;
   message.textContent = msg;
}

//winning num generator
function getWinningNum(min, max) {
   console.log(Math.floor(Math.random()*(max-min+1)+min));
   return Math.floor(Math.random()*(max-min+1)+min);
}

//optimisation code -- will be used later on
// function gameOver(won, msg) {
//    let color;


//    //Disable Input
//    guessInput.disabled = true;
//    //make the border green to show that they won
//    guessInput.style.borderColor = 'green';
//    //set message that the user won
//    setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
// }