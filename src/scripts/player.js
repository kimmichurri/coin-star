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

}
export default Player;