'use strict';

// document.querySelector('.message').textContent = 'Guess my number...';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = '13';

let resetBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

let checkBtn = document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // when there's no guess
    if (!guess) {
        // document.querySelector('.message').textContent = "⛔ Enter a number!";
        displayMessage('⛔ Enter a number!')

        // when player wins!
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = "🎉Correct number";
        displayMessage('🎉Correct number');
        
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
    } else if (guess !== secretNumber) {
            // when player is wrong
            if (score > 1) {
                // document.querySelector('.message').textContent = guess > secretNumber ? "📈Too High" : "📉Too Low";
                displayMessage(guess > secretNumber ? "📈Too High" : "📉Too Low");
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = "😥You lost the game! Try again...";
                displayMessage('😥You lost the game! Try again...')
                score = 0;
                document.querySelector('.score').textContent = score;
                document.body.style.backgroundColor = "red";
            }
        }

    // when guess is too high
    //     } else if (guess > secretNumber) {
    //         if (score > 1) {
    //             document.querySelector('.message').textContent = guess > secretNumber ? "📈Too High" : "📉Too Low";
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = "😥You lost the game!";
    //             score = 0;
    //             document.querySelector('.score').textContent = score;
    //             document.body.style.backgroundColor = "red";
    //         }

    //         // when guess is too low
    //     } else if (guess < secretNumber) {
    //         document.querySelector('.message').textContent = "📉Too Low";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }

});


resetBtn.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
})