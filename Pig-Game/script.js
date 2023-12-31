'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const socre1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Starting Conditions

score0El.textContent = 0;
socre1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentscore = 0;
let activePlayer = 0;
let playing = true;

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for roll 1

  if (dice !== 1) {
    // add dice to current score
    currentscore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentscore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentscore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
