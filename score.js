class Score {
    constructor(value = 0) {
        this._value = value; 
    }

    set value(value) {
        this._value = value >= 0 ? value : 0;
    }

    get value() {
        return this._value;
    }

    increment(value = 1) {
        this.value += value;
    }

    decrement(value = 1) {
        this.value -= value;
    }

    draw(){
        fill(0);
        textSize(32); 
        text(this.value, width / 2, 50);
    }
}