let packman;
let score;
let food;

function setup() {
    createCanvas(800, 600);
    noStroke();
    packman = new Packman(80, 80, 40);
    score = new Score();
    food = new Food(width / 2, height / 2, 20);
}

function handleKeyboardPress() {
    
    if (keyIsDown(UP_ARROW)) {
        packman.moveUp();
    }

    if (keyIsDown(DOWN_ARROW)) {
        packman.moveDown();
    }

    if (keyIsDown(LEFT_ARROW)) {
        packman.moveLeft();
    }

    if (keyIsDown(RIGHT_ARROW)) {
        packman.moveRight();
    }
}

function addScore () {
    if (isEllipseCollision(food, packman)) {
        score.increment(food.score);
    }
}

function isEllipseCollision(el1, el2) {
    let distantce = int(dist(el1.x, el1.y, el2.x, el2.y));
    let sumR = el1.radius + el2.radius;
    return distantce < sumR;
}

function draw() {
    background(220);
    addScore();
    handleKeyboardPress();
    packman.draw();
    food.draw();
    score.draw();
}