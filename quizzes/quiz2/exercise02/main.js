const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn
    drawCreature(333, 333, 99)
}

function drawElmo(x, y, size, color, hasNose) {
    fill(color);
    circle(x, y, size);
    fill('white')
    circle(x + .13 * size, y - .13 * size, size * .2)
    circle(x - .13 * size, y - .13 * size, size * .2)
    fill('black')
    circle(x + .13 * size, y - .13 * size, size * .13)
    circle(x - .13 * size, y - .13 * size, size * .13)

    if(hasNose == true){
    fill('#db5461');
    ellipse(x, y + .05 * size, size /6, size * .3);
}

}

function drawCreature(centerX, centerY, size, primaryColor='white', secondaryColor='black') {
    
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