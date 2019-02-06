// This is the JavaScript entry file - your code begins here
import Game from './scripts/Game.js';
import domUpdates from './scripts/domUpdates.js';
import Wheel from './scripts/Wheel.js'
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;

let wheel;
let game;

// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';
import './css/reset.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/shroom-guy-bubble.png'


// Whatever filepath you use here, copy that into the HTML


//This is the JavaScript entry file - your code begins here.');
 
$('.js-start-button').on('click', (e) => {
  e.preventDefault();
  let newPlayers = domUpdates.displayPlayerNames();
  game = new Game();
  wheel = new Wheel();
  game.wheel = wheel;
  game.startGame();
  game.createPlayers(newPlayers);
  $('.js-splash-page').addClass('hide');
})

$('.js-exit-btn').on('click', () => {
  location.reload();
})

$('.js-spin-btn').on('click', () => {
  wheel.spin();
  // $(wheel.currentSpace).show();
  $('.current-space-container').append(wheel.currentSpace);
  if (wheel.currentSpace === 'BANKRUPT') {
    game.players[game.currentPlayer].roundCoins = 0;
    console.log('BANKRUPT');
    domUpdates.updateScoreDisplay(game.players[game.currentPlayer].name, 0);
    //add disable-clicks class
  } else if (wheel.currentSpace === 'LOSE A TURN') {
    console.log('LOSE A TURN');
    //add disable-clicks class
  } else {
    $('.letter-bank').removeClass('disable-clicks');
    $('.letter-bank').on('click', (e) => {
      game.players[game.currentPlayer].checkPlayerLetter(game.currentPuzzle, e.target.innerText, wheel.currentSpace);
      domUpdates.revealLetter(e.target.innerText, game.currentPuzzle);
      if ($(e.target).hasClass('letters-in-bank')) {
        $(e.target).addClass('hidden-letter') 
      }
    })

  }
})

$('.js-buy-vowel').on('click', () => {
  if (game.players[game.currentPlayer].roundCoins >= 100) {
    $('.vowel').removeClass('disable-clicks')
  } else if (game.players[game.currentPlayer].roundCoins < 100) {
    alert('you need 100 coins to buy a vowel movement')
  }
})


