class Ellipse {

    constructor(x, y, diameter, color = '#ffff00') {
        this._x = x;
        this._y = y;
        this.diameter = diameter;
        this.color = color;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get radius() {
        return this.diameter/2;
    }

    set x(value) {

        let isRightBorderCollision = value + this.radius > width;
        let isLeftBorderCollision  = value - this.radius < 0;

        if (isRightBorderCollision || isLeftBorderCollision) {
            return;
        }

        this._x = value;
    }

    set y(value) {
        let isUpperBorderCollision = value - this.radius < 0;
        let isBottomBorderCollision = value + this.radius > height;

        if (isUpperBorderCollision || isBottomBorderCollision) {
            return;
        }

        this._y = value;
    }

    draw() {
        fill(this.color);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}