const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const face = [
    { centerX: canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'white',secondaryColor: 'black'},
    { centerX: canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'black',secondaryColor: 'white'},
    { centerX: 0 + canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'black',secondaryColor: 'white'},
    { centerX: 0 + canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'black',secondaryColor: 'white'},
    
]

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawGrid(canvasWidth, canvasHeight);
}

// This section is from the waves demo
c = 0;
function draw() {
    clear();
    
    drawCreature(face[0].centerX, face[0].centerY, face[0].size);
    // uses the counter and the sin function to update the position 
    face[0].centerY += 5 * Math.sin(c / 9);
    face[0].centerX += 9;

    drawCreature(face[1].centerX, face[1].centerY, face[1].size);
    face[1].centerY += 5 * -Math.sin(c / 9);
    face[1].centerX += 9;

    drawCreature(face[2].centerX, face[2].centerY, face[2].size);
    face[2].centerY += 5 * -Math.sin(c / 9);
    face[2].centerX += -9;
    
    drawCreature(face[3].centerX, face[3].centerY, face[3].size);
    face[3].centerY += 5 * Math.sin(c / 9);
    face[3].centerX += -9;

    //loop ball 2 back to the beginning if it gets to the end:
    if (face[1].centerX > canvasWidth + face[1].size) {
        face[1].centerX = -face[1].size;
    }
    if (face[0].centerX > canvasWidth + face[0].size) {
        face[0].centerX = -face[0].size;
    }
    if (face[2].centerX < 0 - face[2].size) {
        face[2].centerX = 0 + canvasWidth + face[2].size;
    }
    if (face[3].centerX < 0 - face[3].size) {
        face[3].centerX = 0 + canvasWidth + face[3].size;
    }

    c++; // don't forget to increment the counter
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
