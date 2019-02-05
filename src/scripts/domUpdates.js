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
    console.log(currentLetters);
    let mapLetters = currentLetters.map((letter) => {
      let specialCharacters = ["-", "&", "\'"];
      if (letter === ' ') {
        return `<div class="puzzle-letter-wrapper break"><p class="puzzle-letter"> ${letter} </p></div>`
      } else if (specialCharacters.includes(letter)) {
        return `<div class="puzzle-letter-wrapper"><p class="puzzle-letter special-character"> ${letter} </p></div>`
      } else {
        return `<div class="puzzle-letter-wrapper"><p class="hidden-letter puzzle-letter"> ${letter} </p></div>`
      }
    })

    mapLetters.forEach((element) => {
      if(element.includes('break')) {
        $('.puzzle-display-container').append(`<br/>`)
      } else {
        $('.puzzle-display-container').append(element);
      }
    })
   
  },

    updateScoreDisplay(player, coins) {
    let name1 = $('.js-player-name-display-one')
    let name2 = $('.js-player-name-display-two')
    let name3 = $('.js-player-name-display-three')
    let allNames = [name1, name2, name3]
    let foundName = allNames.find((name) => {
      return name.text() === player
    })
    foundName.siblings('.roundCoinDisplay').text(coins)
    //increment foundPlayer roundCoinDisplay with coins

    }
  }
  
  export default domUpdates