class GuessingGame {
    constructor() {
        var _min, _max, guess;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        return Math.ceil((this._min + this._max)/2);
    }

    lower() {
        this._max = Math.ceil((this._min + this._max)/2);
    }

    greater() {
        this._min = Math.ceil((this._min + this._max)/2);
    }
}

module.exports = GuessingGame;
