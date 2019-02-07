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
    
  });

  it('should validate solution input and double round coins if correct', () => {

  });

});