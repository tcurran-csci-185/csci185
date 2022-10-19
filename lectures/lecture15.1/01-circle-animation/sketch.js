

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:

//converting variables for ball into an object below
const ball = {
    x: 0,
    y: 0,
    d: 50,
    speedX: 3,
    speedY: 2,
    fillColor: 'pink',
};


// change these variables into an object (see above)^
// let x = 0;
// let y = 0;
// let d = 50;
// let speedX = 3;
// let speedY = 2;

// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:





// This is a list of objects
// The brackets indicate that it is a list of objects
const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, fillColor:'grey'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, fillColor:'dimgrey'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, fillColor:'black'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, fillColor:'skyblue'},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, fillColor:'teal'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, fillColor:'pink'},
];
//Use object functions (from const Ball) in variables
// previously (x, y, d) now (ball.x, ball.y, ball.d)
function draw() {
    clear();

    //added counter
    // let x = 0;

    //added while loop (broke it at this point)
    // fixed by adding x++ and "const ball = circleData[x];"
    // while (x < circleData.length) {
    
    // Set color for each circle
    // fix fill color :'[
    // see lecture recording @ 30ish mins

    // creating a for loop instead of a while loop
    // see lecture slide to compare 
    for(let x = 0; x < circleData.length; x++) {
    fill('hotpink');
    const ball = circleData[x];

    circle(ball.x, ball.y, ball.d,);
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    //x++;
    }
    
    drawGrid(canvasWidth, canvasHeight);
    
}
