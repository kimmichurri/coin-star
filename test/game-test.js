import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/scripts/Game.js';
import domUpdates from '../src/scripts/domUpdates.js';
import BonusWheel from '../src/scripts/BonusWheel.js';


describe('Testing Game methods and properties', () => {
  var game;

  beforeEach(function() {
    game = new Game();
    chai.spy.on(domUpdates, ['displayPuzzle', 'highlightCurrentPlayer', 
    'vowelDisableClicks', 'displayPlayerNames', 'consonantDisableClicks',
    'updateScoreDisplay', 'reinstateLetterBank', 'removePuzzle'], () => true);
  });
  
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have correct default properties', () => {
    expect(game.round).to.equal(1);
    expect(game.players).to.deep.equal([]);
    expect(game.currentPlayer).to.equal(0);
    expect(game.wheel).to.deep.equal([]);
    expect(game.puzzleBank).to.deep.equal([]); 
    expect(game.currentPuzzle).to.deep.equal([]);
  });

  it('should take an array of names and reassign players property', () => {
    let playerNames = ['Kim'];
    expect(game.players).to.deep.equal([]);
    game.createPlayers(playerNames);
    expect(game.players).to.deep.equal(
      [{name: "Kim", roundCoins: 0, totalCoins: 0}]
    );
  });

  it('should generate a puzzle bank with 5 puzzles', () => {
    expect(game.puzzleBank).to.deep.equal([]);
    game.createPuzzleBank();
    expect(game.puzzleBank.length).to.equal(5);
  });

  it('should generate an array of letters as current puzzle', () => {
    expect(game.currentPuzzle).to.deep.equal([]);
    game.createPuzzleBank();
    expect(game.currentPuzzle.length).to.be.above(1);
  });

  it('should increment current player index to switch player turn', () => {
    expect(game.currentPlayer).to.equal(0);
    game.switchPlayerTurn();
    expect(game.currentPlayer).to.equal(1);
  });

  it('should shift off round one puzzle and update player coins', () => {
    expect(game.round).to.equal(1);
    expect(game.puzzleBank.length).to.equal(0);
    game.createPlayers(['Casey', 'Jon']);
    game.players[0].roundCoins = 30;
    game.puzzleBank = [ {  
      category: 'The 90s',
      number_of_words: 1,
      total_number_of_letters: 9,
      first_word: 9, 
      description:'Puzzles pertaining to the decade in question.',
      correct_answer: 'Operation',
    },
    {  
      category: 'The 90s',
      number_of_words: 1,
      total_number_of_letters: 3,
      first_word: 3, 
      description:'Puzzles pertaining to the decade in question.',
      correct_answer: 'Moo',
    }
  ]
    game.increaseRound();
    expect(game.puzzleBank.length).to.equal(1);
    expect(game.players[0].totalCoins).to.equal(30);
    expect(game.round).to.equal(2);
  });

  it('bonus round should instantiate new bonus wheel', () => {
    game.bonusRound();
    expect(game.wheel instanceof BonusWheel).to.be.true;
  });
  
});