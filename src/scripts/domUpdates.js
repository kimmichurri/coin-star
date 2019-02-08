import Game from './Game.js';

let domUpdates = {

  updatePlayerNames() {
    let $playerOneInput = $('.js-player-one-input').val();
    let $playerTwoInput = $('.js-player-two-input').val();
    let $playerThreeInput = $('.js-player-three-input').val();
    const playerNames = [$playerOneInput, $playerTwoInput, $playerThreeInput];
    this.displayPlayerNames(playerNames)
    return playerNames;
  },

  displayPlayerNames(playerNames) {
    $('.js-player-name-display-one').text(playerNames[0]);
    $('.js-player-name-display-two').text(playerNames[1]);
    $('.js-player-name-display-three').text(playerNames[2]);
  },

  displayPuzzle(currentCategory, currentLetters) {
    console.log(currentLetters);
    $('.category-text').empty().append(currentCategory);
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
        $('.puzzle-display-container').append(`<br/>`);
      } else {
        $('.puzzle-display-container').append(element);
      }
    })
  },

  highlightCurrentPlayer(playerIndex) {
    let podium1 = $('.podium1');
    let podium2 = $('.podium2');
    let podium3 = $('.podium3');
    let allPodiums = [podium1, podium2, podium3];
    allPodiums.forEach((podium, i) => {
      if(i === playerIndex) {
        $(podium).addClass('highlight');
      } else {
        $(podium).removeClass('highlight');
      }
    })
      
  },

  updateScoreDisplay(playerName, roundCoins, totalCoins) {

    let name1 = $('.js-player-name-display-one');
    let name2 = $('.js-player-name-display-two');
    let name3 = $('.js-player-name-display-three');
    let allNames = [name1, name2, name3];
    let foundName = allNames.find((name) => {
      return name.text() === playerName
    })
    foundName.siblings('.roundCoinDisplay').text(roundCoins);
    if (totalCoins) {
    foundName.siblings('.totalCoinDisplay').text(totalCoins);
    }
  },

  revealLetter(selectedLetter) {
    let $puzzleLetters = $('.puzzle-letter');
    $puzzleLetters.each((index, puzzlet) => {
      let puzzletText = $(puzzlet).text().trim();
      if ( puzzletText === selectedLetter)  {
        $(puzzlet).removeClass('hidden-letter');
        alert('You guessed the letter!');
      }
    })
    if ($puzzleLetters.hasClass('hidden-letter')) {
      return true;
    } else {
      return false;
    }
  },

  revealGuess() {
    let $puzzleLetters = $('.puzzle-letter');
    $puzzleLetters.removeClass('hidden-letter');
    alert('Congratulations! You solved this puzzle! On to the next round!');
  },

  reinstatePuzzleBank() {
    $('.letters-in-bank').removeClass('hidden-letter');
  },

  appendEntryBox() {
    $('.solve-pop-up').removeClass('hide');
  },

  vowelDisableClicks() {
    $('.js-buy-vowel').addClass('disable-clicks');
    $('.vowel').addClass('disable-clicks');
  },

  consonantDisableClicks() {
    $('.consonant').addClass('disable-clicks');
  },

  solveButtonDisable() {
    $('.js-solve-btn').addClass('disable-clicks')
  },

  // updateTotalCoinsDisplay() {
    
  // },

}
  
export default domUpdates