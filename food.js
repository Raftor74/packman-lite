class Food extends Ellipse {
    constructor(x, y, diameter, color = '#ff0000', score = 10) {
        super (x, y, diameter, color);
        this._score = score;
    }

    get score() {
        return this._score;
    }
}