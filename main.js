// Game Function:
//    - player must guess a number between a min and max
//    - player gets a certain amount of guesses
//    - notify player of guesses remaining...
//    - notify the player of the correct answer if loose 
//    - let player choose to play again

// Game values
let min = 1, 
   max = 10,
   winningNum = 2, 
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

//listen for guess
guessBtn.addEventListener('click', function() {
   console.log(guessInput.value); 
   let guess = parseInt(guessInput.value);
   console.log(guess);

   //validate
   //isNaN() checks for whether the value inside the box is "NaN" whcih means whether its empty or not
   if (isNaN(guess) || guess < min || guess > max) {
      setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }

   //check if won
   if (guess === winningNum) {
      //Disable Input
      guessInput.disabled = true;
      //make the border green to show that they won
      guessInput.style.borderColor = 'green';
      //set message that the user won
      setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
   }
});

//set message
function setMessage(msg, color) {
   message.style.color = color;
   message.textContent = msg;
}