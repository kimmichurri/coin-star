import Wheel from './Wheel.js'
import Player from './Player.js'
import data from '../data.js'
import helper from './helper.js'
import domUpdates from './domUpdates.js'

class Game {
  constructor() {
    this.round = 1;
    this.players = [];
    this.currentPlayer = 0;
    this.wheel = [];
    this.puzzleBank = [];
    this.currentPuzzle = [];
  }

  startGame() {
    this.wheel.createSpaces();
    this.createPuzzleBank();
  }

  createPlayers(playerNames) {
    playerNames.forEach((name) => {
      let player = new Player(name)
      this.players.push(player)
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
    this.createPuzzleArray();
  }

  createPuzzleArray() {
    let puzzleLetters = this.puzzleBank[0].correct_answer.toUpperCase().split('');
    domUpdates.displayPuzzle(puzzleLetters);
    this.currentPuzzle = puzzleLetters
    console.log('puzzle letters', puzzleLetters)
  }

   switchPlayerTurn() {
    $('.js-buy-vowel').addClass('disable-clicks')
    if (this.currentPlayer < 2) {
      this.currentPlayer++
      console.log(this.currentPlayer)
    } else {
      this.currentPlayer = 0
      console.log(this.currentPlayer)
    }
    domUpdates.highlightCurrentPlayer(this.currentPlayer)
  }

  // resetWheel {
  // call wheel.createSpaces to created now spaces on the wheel
  // for new round
  // }
   
}
export default Game;
