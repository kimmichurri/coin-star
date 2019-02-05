import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/scripts/Game.js';
import domUpdates from '../src/scripts/domUpdates.js';


describe('Testing Game methods and properties', () => {
  var game;

  beforeEach(function() {
    game = new Game();
    chai.spy.on(domUpdates, 'displayPlayerNames', returns => true);
    chai.spy.on(domUpdates, 'displayPuzzle', returns => true);
  });
  
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game)
  })

  it('should have correct default properties', () => {
    expect(game.round).to.equal(1);
    expect(game.players).to.deep.equal([]);
    expect(game.currentPlayer).to.equal(game.players[0])
    expect(game.wheel).to.deep.equal([]);
    expect(game.puzzleBank).to.deep.equal([]); 
  });

  it('should take an array of names and reassign players property', () => {
    let playerNames = ['Kim']
    expect(game.players).to.deep.equal([]);
    game.createPlayers(playerNames);
    expect(game.players).to.deep.equal(
      [{name: "Kim", roundCoins: 0, totalCoins: 0}]
      );
  })

  // it('should generate a puzzle bank with 5 puzzles', () => {
  //   expect(game.puzzleBank).to.deep.equal([]);
  //   game.createPuzzleBank();
  //   expect(game.puzzleBank.length).to.equal(5);
  // })
});