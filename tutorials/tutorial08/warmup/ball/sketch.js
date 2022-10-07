const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;

function draw() {
    frameRate(30);
    clear();
// when the ball hits the right wall, make it bounce
    if (x >= 475) {
        speed = (speed + 10) * -1;
    } else if (x <= 175) {
        speed = (-1 * speed + 10);
    }

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, 50);
    x += speed;
    console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}