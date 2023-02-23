class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.initialNumber = min;
        this.finiteNumber = max;
    }
  
    guess() {
      return this.average = Math.round((this.finiteNumber - this.initialNumber) / 2) + this.initialNumber;
    }
  
    lower() {
      return this.finiteNumber = this.average;
    }
  
    greater() {
      return this.initialNumber = this.average;
    }
}

module.exports = GuessingGame;
