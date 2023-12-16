'use strict';

const LabelGuess = document.querySelector('.select');
const LabelScore = document.querySelector('.snum');
const LabelHigh = document.querySelector('.hsnum');
const LabelC1 = document.querySelector('.curr--1');
const LabelC2 = document.querySelector('.curr--2');
const btnHold = document.querySelector('.hold');
const btnRoll = document.querySelector('.roll');
const btnNew = document.querySelector('.new');
const score1 = document.querySelector('.number1');
const score2 = document.querySelector('.number2');
const diceEl = document.querySelector('.dice');

//Hiding the dice initially:

diceEl.classList.add('hidden');
//For Roll Button:

let n, curr = 0;
let cp = 1;

btnRoll.addEventListener('click', function () {
    //Generating a random number:
    n = 1 + Math.trunc(Math.random() * 6);
    // console.log(n);
    // console.log(cp, curr);

    //Showing the random dice:
    diceEl.classList.remove('hidden');
    diceEl.src = `../Pig Game/dice-${n}.png`;


    //Taking care of edge case(n=1):
    if (n === 1) {
        //switch player:
        n = 0;
        curr = 0;
        document.querySelector(`.curr--${cp}`).textContent = 0;
        document.querySelector('.player1').classList.toggle('player--active');
        document.querySelector('.player2').classList.toggle('player--active');
        cp = (cp === 1) ? 2 : 1;
    }
    else {
        curr += n;
        document.querySelector(`.curr--${cp}`).textContent = curr;
    }
});

//Hold button:

btnHold.addEventListener('click', function () {
    console.log(curr);
    //adding the current score to active player's score:
    let activeScore = Number(document.querySelector(`.number${cp}`).textContent);
    console.log(activeScore);
    activeScore += curr;
    document.querySelector(`.number${cp}`).textContent = activeScore;


    //setting the current score to 0:
    document.querySelector(`.curr--${cp}`).textContent = 0;
    curr = 0;

    //changing the active player:
    cp = (cp === 1) ? 2 : 1;
    document.querySelector('.player1').classList.toggle('player--active');
    document.querySelector('.player2').classList.toggle('player--active');   
});

//New Game Button:

btnNew.addEventListener('click', function(){
   score1.textContent = '0';
   score2.textContent = '0';
    curr = 0;
    cp = 1;
    LabelC1.textContent = '0';
    LabelC2.textContent = '0';
    diceEl.classList.add('hidden');
    document.querySelector('.player1').classList.add('player--active');
    document.querySelector('.player2').classList.remove('player--active');
});