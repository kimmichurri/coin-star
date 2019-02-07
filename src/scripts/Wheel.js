import data from '../data.js'
import helper from './helper.js'

class Wheel {
  constructor() {
    this.spaces = [];
    this.currentSpace = null;
  }

  createSpaces() {
    let randomMin = helper.getRandomInt(1, 17);
    let randomMax = randomMin + 6;
    let newSpaces = data.wheel.slice(randomMin, randomMax);
    this.spaces.push(...newSpaces)
  }

  spin() {
    let randomSpace = helper.getRandomInt(0, 6)
    this.currentSpace = this.spaces[randomSpace]
  }


}
export default Wheel;
