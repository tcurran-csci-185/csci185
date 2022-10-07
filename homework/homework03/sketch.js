function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // drawCreature();

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature(centerX, centerY, size, primaryColor='black', secondaryColor='white') {
    fill('grey')
    square( 9, 9, 102);
    fill(primaryColor)
    square( 10, 10, 100);
    fill(secondaryColor)
    rect( 10, 10, 50, 100);
    fill(primaryColor)
    rect(38, 25 , 2, 10)
    fill(secondaryColor)
    rect(86, 25 , 2, 10)
    fill(secondaryColor )
    triangle(60, 30, 60, 60, 70, 60)
    fill(primaryColor)
    rect(42, 78, 18, 2)
    fill(secondaryColor)
    rect(60, 78, 18, 2)
    fill(primaryColor)
    rect(32, 100, 78, 10)

}

// function drawCreature(centerX, centerY, size, primaryColor='black', secondaryColor='white') {
//     fill('grey')
//     square( 9, 9, 102);
//     fill(primaryColor)
//     square( 10, 10, 100);
//     fill(secondaryColor)
//     rect( 10, 10, 50, 100);
//     fill(primaryColor)
//     rect(38, 25 , 2, 10)
//     fill(secondaryColor)
//     rect(86, 25 , 2, 10)
//     fill(secondaryColor )
//     triangle(60, 30, 60, 60, 70, 60)
//     fill(primaryColor)
//     rect(42, 78, 18, 2)
//     fill(secondaryColor)
//     rect(60, 78, 18, 2)
//     fill(primaryColor)
//     rect(32, 100, 78, 10)

// function drawCreature(centerX, centerY, size, primaryColor='black', secondaryColor='white') {
//     fill('grey')
//     square( 90, 90, 1020);
//     fill(primaryColor)
//     square( 100, 100, 1000);
//     fill(secondaryColor)
//     rect( 100, 100, 500, 1000);
//     fill(primaryColor)
//     rect(380, 250 , 20, 100)
//     fill(secondaryColor)
//     rect(860, 250 , 20, 100)
//     fill(secondaryColor )
//     triangle(600, 300, 600, 600, 700, 600)
//     fill(primaryColor)
//     rect(420, 780, 180, 20)
//     fill(secondaryColor)
//     rect(600, 780, 180, 20)
//     fill(primaryColor)
//     rect(320, 1000, 780, 100)