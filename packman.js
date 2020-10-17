class Packman extends Ellipse {
    constructor(x, y, diameter, color = '#ffff00', speed = 2) {
        super (x, y, diameter, color);
        this.speed = speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }
}