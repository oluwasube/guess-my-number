'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        displayMessage('⛔ No number!');


    } else if (guess === number) {
        displayMessage('🎉 Correct number!');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


        // when guess is wrong 
    } else if (guess != number) {
        if (score > 0) {

            // document.querySelector('.message').textContent = guess > number ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > number ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {

            displayMessage('You lost the Game!');
        }
    }

});


document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing....');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';

});
