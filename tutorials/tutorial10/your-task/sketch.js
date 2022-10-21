const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawCreature(425, 225, 200);

    drawGrid(canvasWidth, canvasHeight);
}

// replace this function with YOUR creature!
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
