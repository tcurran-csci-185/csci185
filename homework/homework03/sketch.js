function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // drawCreature();

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(709, 413, 166, 'black', 'white');
    drawCreature(683, 13, 233, '#800080', '#008080');
    drawCreature(209, 403, 433, 'white', 'black');
    drawCreature(523, 223, 133, 'hotpink', '#b469ff');
    drawCreature(573, 113, 99, 'white', 'black');
    drawCreature(9, 999, 19, 'white', 'black');
    drawCreature(109, 999, 29, 'white', 'black');
    drawCreature(209, 999, 39, 'white', 'black');
    drawCreature(309, 999, 49, 'white', 'black');
    drawCreature(409, 999, 59, 'white', 'black');
    drawCreature(509, 999, 69, 'white', 'black');
    drawCreature(609, 999, 79, 'white', 'black');
    drawCreature(709, 999, 89, 'white', 'black');
    drawCreature(809, 999, 99, 'white', 'black');
    drawCreature(709, 303, 89, 'white', 'black');
    drawCreature(409, 899, 79, 'white', 'black');
    drawCreature(509, 899, 69, 'white', 'black');
    drawCreature(609, 899, 59, 'white', 'black');
    drawCreature(709, 899, 49, 'white', 'black');
    drawCreature(809, 899, 39, 'white', 'black');
    drawCreature(909, 899, 29, 'white', 'black');
    drawCreature(1009, 899, 19, 'white', 'black');
    drawCreature(1109, 899, 9, 'white', 'black');
    drawCreature(1209, 899, -1, 'white', 'black');
    // drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

// Why does it seem like everything has a border now??
// probably a much smarter way to do the calculations...
function drawCreature(centerX, centerY, size, primaryColor='black', secondaryColor='white') {
    fill('grey')
    square(centerX + size * .09, centerY + size  * .09, size * 1.02); 
    
    fill(primaryColor);
    square( centerX + size * .1, centerY + size * .1, size); 
    
    fill(secondaryColor);
    rect( centerX + size * .1, centerY + size * .1, size * .5 , size); 
    
    fill(primaryColor);
    rect( centerX + size * .38, centerY + size * .25 , size * .02, size * .1); 
    
    fill(secondaryColor);
    rect(centerX + size * .86, centerY + size * .25 , size * .02, size * .1); 
    
    fill(secondaryColor );
    triangle(centerX + size * .6, centerY +size * .3, centerX + size * .6 , 
    centerY +size * .6, centerX + size * .7, centerY + size * .6); 

    fill(primaryColor);
    rect(centerX + size * .42, centerY + size * .78, size * .18, size * .02); 
    
    fill(secondaryColor);
    rect(centerX + size * .6, centerY + size * .78, size * .18, size * .02); 
    
    fill(primaryColor);
    rect(centerX + size * .32, centerY + size, size * .78, size * .1); 

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