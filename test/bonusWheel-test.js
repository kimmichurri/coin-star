import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import BonusWheel from '../src/scripts/bonusWheel.js';
import domUpdates from '../src/scripts/domUpdates.js';

describe('Testing bonusWheel methods and properties', function() {
  var bonusWheel;

  beforeEach(function () {
    bonusWheel = new BonusWheel();
  });
    
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should be an instance of Bonus Wheel', () => {
    expect(bonusWheel).to.be.an.instanceof(BonusWheel);
  })

  it('should have correct default properties', function() {
    expect(bonusWheel.increasedCoins).to.equal(0);
  });

  it('should create an array of 6 bonus wheel spaces', () => {
    expect(bonusWheel.spaces).to.deep.equal([]);
    bonusWheel.createSpaces();
    expect(bonusWheel.spaces.length).to.equal(6);
  });

});