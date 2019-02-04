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
      let specialCharacters = ["-", "&", "\'"];
      if (letter === ' ') {
        return `<div class="puzzle-letter-wrapper break"><p class="puzzle-letter"> ${letter} </p></div>`
      } else if (specialCharacters.includes(letter)) {
        return `<div class="puzzle-letter-wrapper"><p class="puzzle-letter special-character"> ${letter} </p></div>`
      } else {
        return `<div class="puzzle-letter-wrapper"><p class="puzzle-letter"> ${letter} </p></div>`
      }
    })

    newArr.forEach((element) => {
      if(element.includes('break')) {
        $('.puzzle-display-container').append(`<br/>`)
      } else {
        $('.puzzle-display-container').append(element);
      }
    })
   
  }
  }
  
  export default domUpdates