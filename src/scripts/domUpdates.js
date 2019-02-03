import Game from './Game.js';

let domUpdates = {

  displayPlayerNames() {
    let $playerOneInput = $('.js-player-one-input').val();
    let $playerTwoInput = $('.js-player-two-input').val();
    let $playerThreeInput = $('.js-player-three-input').val();

    const playerNames = [$playerOneInput, $playerTwoInput, $playerThreeInput];
    $('.js-player-name-display-one').text($playerOneInput);
    $('.js-player-name-display-two').text($playerTwoInput);
    $('.js-player-name-display-three').text($playerThreeInput);

    return playerNames
  },

  displayPuzzle(currentLetters) {
    let newArr = currentLetters.map((letter) => {
      return `<div class="puzzle-letter-wrapper"><p class="puzzle-letter"> ${letter} </p></div>`
    })
    newArr.forEach((element) => {
      $('.puzzle-display-container').append(element);
    })
  }
  // $('.puzzle-display-container').append();

}

export default domUpdates;