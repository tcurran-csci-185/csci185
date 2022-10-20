// I wish I didn't do this like a troglodyte... but it's done I guess

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight + 200; 

// feel free to change these values as you like!
const c1 = {
    x: -100,
    y: 185,
    width: 200,
    speed: 9,
    color: '#8002d5'
};

const c2 = {
    x: canvasWidth +100,
    y: 285,
    width: 200,
    speed: -9,
    color: '#E66000'
};

const c3 = {
    x: -100,
    y: 485,
    width: 200,
    speed: 60,
    color: '#FFCB00'
};

const c4 = {
    x: -100,
    y: 685,
    width: 200,
    speed: 7.7,
    color: '#00539F'
};

const c5 = {
    x: -100,
    y: 885,
    width: 200,
    speed: 17,
    color: '#0095DD'
};

const c6 = {
    x: canvasWidth +100,
    y: 885,
    width: 200,
    speed: -17,
    color: '#002147'
};

const c7 = {
    x: -100,
    y: window.innerHeight +185,
    width: 200,
    speed: 144,
    color: '#FFCB00'
};

const c8 = {
    x: canvasWidth +100,
    y: window.innerHeight +85,
    width: 200,
    speed: -144,
    color: '#8002d5'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed;
    c4.x += c4.speed;
    c5.x += c5.speed;
    c6.x += c6.speed;
    c7.x += c7.speed;
    c8.x += c8.speed;


    if (c1.x > canvasWidth + c1.width + 100) {
        c1.x = -100
    }

    if (c2.x < 0 - c2.width) {
        c2.x = canvasWidth + c2.width
    }

    if (c3.x > canvasWidth + c3.width + 100) {
        c3.x = -100
    }

    if (c4.x > canvasWidth + c4.width + 100) {
        c4.x = -100
    }

    if (c5.x > canvasWidth/2 - 100) {
        c5.speed = 0
    }
    
    if (c6.x < canvasWidth/2 + 100) {
        c6.speed = 0
    }

    if (c7.x > canvasWidth + c7.width + 100) {
        c7.x = -100;
    }

    if (c8.x < 0 - c8.width) {
        c8.x = canvasWidth + c8.width
    }
   
    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCreature(c1.x, c1.y - 65, 29, 'white', 'black');
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCreature(c2.x -40 , c2.y - 65, 29, 'white', 'black');
    drawCar(c3.x, c3.y, c3.width, c3.color);
    drawCabOver(c4.x, c4.y, c4.width, c4.color);
    drawCar(c5.x, c5.y, c5.width, c5.color);
    drawCreature(c5.x, c5.y - 65, 29, 'white', 'black');
    drawCar(c6.x, c6.y, c6.width, c6.color);
    drawCreature(c6.x -40 , c6.y - 65, 29, 'white', 'black');
    drawCreature(c3.x, c3.y -65, 29, 'white', 'black');
    
    drawCreature(c4.x -144, c4.y -150, 100, 'white', 'black');
    
    drawCreature(c4.x + 50, c4.y -90, 29, 'white', 'black');
    
    // This is kinda nauseating 
    drawCar(c8.x, c8.y, c8.width, c8.color);
    drawCar(c7.x, c7.y, c7.width, c7.color);
    
    drawGrid(canvasWidth, canvasHeight);

}


function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}

function drawCabOver(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size, y - size/5, size, size/5); // bottom
    rect(x - size/500, y - (size/5 + size/3), size / 2, size/2); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
    circle(x - size + 20, y, size / 6);

}

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