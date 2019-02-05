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
  $('.js-splash-page').addClass('hide')  
})

$('.js-exit-btn').on('click',() => {
  location.reload();
})

$('.js-spin-btn').on('click', () => {
  wheel.spin()
})

$('.letter-bank').on('click', (e) => {
  if (game.currentPuzzle.includes(e.target.innerText)){
    console.log('includes!')
  }
 
})

