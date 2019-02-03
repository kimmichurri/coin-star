import Wheel from './Wheel.js'
import Player from './Player.js'
import data from '../data.js'
import helper from './helper.js'
import domUpdates from './domUpdates.js'

class Game {
  constructor() {
    this.round = 1;
    this.players = {};
    this.wheel = [];
    this.puzzleBank = [];
  }

  startGame() {
    this.wheel = new Wheel();
    this.wheel.createSpaces();
    this.createPuzzleBank();
  }

  createPlayers(playerNames) {
    playerNames.forEach((name) => {
      this.players[name] = new Player(name)    
    })
  }

  createPuzzleBank() {
    let randomIndex = helper.getRandomInt(0, 23);
    let puzzleOne = data.puzzles.one_word_answers.puzzle_bank[randomIndex];
    let puzzleTwo = data.puzzles.two_word_answers.puzzle_bank[randomIndex];
    let puzzleThree = data.puzzles.three_word_answers.puzzle_bank[randomIndex];
    let puzzleFour = data.puzzles.four_word_answers.puzzle_bank[randomIndex];
    let bonusPuzzle = data.puzzles.four_word_answers.puzzle_bank[randomIndex + 1];

    this.puzzleBank.push(puzzleOne, puzzleTwo, puzzleThree, puzzleFour, bonusPuzzle);
    this.createPuzzzleArray();
  }

  createPuzzzleArray() {
    let puzzleLetters = this.puzzleBank[3].correct_answer.toUpperCase().split('');
    // console.log(puzzleLetters);
    domUpdates.displayPuzzle(puzzleLetters);
  }

  // resetWheel() {
  //  // wheel.reset()
  // }

  // createWheel(){
  //   //create a new instance of wheel
  //   //set that wheel to equal this.wheel
  // }
   
}
export default Game;
