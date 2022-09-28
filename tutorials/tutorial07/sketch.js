function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    // drawCircle(100, 100, 25, 'yellow')
    // drawCircle(200, 200, 50, 'violet');
    // drawCircle(300, 300, 100, 'teal');
    // drawCircle(400, 400, 200, 'lightblue');
    // drawCircle(300, 300, 50, 'violet');

    drawCircle(100, 100, 100, 'violet');
    drawCircle(300, 100, 50, 'violet');
    drawCircle(500, 100, 100, 'violet');
    drawCircle(700, 100, 50, 'violet');




    // Exercise 2: 
    drawOval();

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(300, 300, 50);
    drawBullseye(500, 300, 100);
    drawBullseye(700, 300, 50);

    // Exercise 4:
    drawFace();

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval() {
    fill('teal');
    ellipse(100, 200, 100, 62.5);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, color1, color2) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, size * .75);
    fill('teal');
    circle(centerX, centerY, size * .5);
    fill('navy');
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace() {
    fill('white');
    circle(100, 400, 50);
    fill('black');
    circle(92, 392, 8);
    circle(108, 392, 8);
}
