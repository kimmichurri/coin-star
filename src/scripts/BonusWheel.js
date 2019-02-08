import Wheel from './Wheel.js'
import data from '../data.js';
import helper from './helper.js'

class BonusWheel extends Wheel {
  constructor() {
    super();
    this.increasedCoins = 0;
  }
  createSpaces() {
    console.log(this.spaces);
    let bonusSpaces = data.wheel.filter((spaces) => typeof spaces === 'number' )
    let increasedSpaces = bonusSpaces.map((space) => {
      return space*2;
    })
    let randomMin = helper.getRandomInt(1, 17);
    let randomMax = randomMin + 6;
    let newSpaces = increasedSpaces.slice(randomMin, randomMax);
    console.log(newSpaces);
    this.spaces.push(...newSpaces)
  }
}


export default BonusWheel;
