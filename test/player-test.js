import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/scripts/player.js'
import domUpdates from '../src/scripts/domUpdates.js';

describe('Testing Player methods and properties', () => {
  var player;

  beforeEach(function() {
    player = new Player('Kristen');
    chai.spy.on(domUpdates, 'updateScoreDisplay', () => true);
    chai.spy.on(domUpdates, 'revealGuess', () => true);
  });
  
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should be an instance of Player', () => {
    expect(player).to.be.an.instanceof(Player);
  });

  it('should have correct default properties', () => {
    expect(player.name).to.equal('Kristen');
    expect(player.roundCoins).to.equal(0);
    expect(player.totalCoins).to.equal(0); 
  });

  it('should increase round coins if player selects correct letter', () => {
    expect(player.roundCoins).to.equal(0);
    let currentSpinValue = 400;
    let puzzle = ['I'];
    let letter = 'I';
    player.checkPlayerLetter(puzzle, letter, currentSpinValue);
    expect(player.roundCoins).to.equal(400);
  });

  it('should validate solution input and double round coins if correct', () => {
    let puzzle = ['H', 'A', 'T'];
    let value = 'hat';
    player.roundCoins = 50;
    player.checkSolutionInput(puzzle, value);
    expect(player.roundCoins).to.equal(100);
  });

  it('should update winner coins', () => {
    player.totalCoins = 0;
    let highestPlayerCoins = 1600;
    player.updateWinnerCoins(highestPlayerCoins);
    expect(player.totalCoins).to.equal(1600);
  });

  it('should reset all round coins to 0 at end of round', () => {
    player.roundCoins = 90;
    player.updateAllRoundCoins();
    expect(player.roundCoins).to.equal(0);
  });

});