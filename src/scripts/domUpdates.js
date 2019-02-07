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

  highlightCurrentPlayer(playerIndex){
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

  updateScoreDisplay(playerName, coins) {
    let name1 = $('.js-player-name-display-one');
    let name2 = $('.js-player-name-display-two');
    let name3 = $('.js-player-name-display-three');
    let allNames = [name1, name2, name3];
    let foundName = allNames.find((name) => {
      return name.text() === playerName
    })
    foundName.siblings('.roundCoinDisplay').text(coins);
  },

  revealLetter(selectedLetter) {
    let $puzzleLetters = $('.puzzle-letter');
    $puzzleLetters.each((index, puzzlet) => {
      let puzzletText = $(puzzlet).text().trim();
      if ( puzzletText === selectedLetter)  {
        $(puzzlet).removeClass('hidden-letter');
      }
    })
      if ($puzzleLetters.hasClass('hidden-letter')) {
        console.log('keep going');
      } else {
        console.log('solved it');
        alert('Congratulations! You solved this puzzle! On to the next round!');
      }
    }
,

  // $(letter).hasClass('hidden-letter')

  revealGuess() {
    $('.puzzle-letter').removeClass('hidden-letter');
    alert('Great job! You won this round!');
    game.increaseRound();
  },

  reinstatePuzzleBank() {
    $('.letters-in-bank').removeClass('hidden-letter');
  },

  appendEntryBox() {
    $('.solve-pop-up').removeClass('hide');
  },

  // updateTotalCoinsDisplay() {
    
  // },

}
  
export default domUpdates