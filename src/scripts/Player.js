import domUpdates from './domUpdates.js'

class Player {
  constructor(name) {
    this.name = name;
    this.roundCoins = 0;
    this.totalCoins = 0;
  }

  checkPlayerLetter(puzzle, letter, currentSpinValue) {
    if (puzzle.includes(letter)) {
      this.roundCoins += currentSpinValue;
      domUpdates.updateScoreDisplay(this.name, this.roundCoins)
    } 
  }

  checkSolutionInput(puzzle, value) {
    let joinedPuzzle = puzzle.join('')
    let upperCaseValue = value.toUpperCase()
    if (joinedPuzzle.includes(upperCaseValue)) {
      this.roundCoins = this.roundCoins*2;
      domUpdates.updateScoreDisplay(this.name, this.roundCoins);
      domUpdates.revealGuess();
    } 
  }

  updateWinnerCoins (highestPlayerCoins) {
    this.totalCoins = highestPlayerCoins;
  }

  updateAllRoundCoins() {
    this.roundCoins = 0;
  }

}
export default Player;
