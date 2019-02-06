import domUpdates from './domUpdates.js'

class Player {
    constructor(name) {
        this.name = name;
        this.roundCoins = 0;
        this.totalCoins = 0;
    }

  checkPlayerLetter(puzzle, letter, currentSpinValue) {
    if (puzzle.includes(letter)) {
      console.log(letter, 'remove class here');
      this.roundCoins += currentSpinValue;
      //call domUpdate here to remove the class to display chosen letter
     // console.log(this.roundCoins, this.name)
     domUpdates.updateScoreDisplay(this.name, this.roundCoins)
    }
   
  }

}
export default Player;