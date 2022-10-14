const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
];
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);

    // first 6 rows of frank
    // wrap this line in a while loop
    // What changes each time?
    // *which row prints
    // the y increases by the pixel size
    let i = 0;
    let x = 50
    let y = 150
    let pixelSize = 25
    let grid = frank;
    while (i < frank.length) {
        drawRow(grid[i], x, y, pixelSize);
        ++i;
        y+= pixelSize;
    }
    // drawRow(frank[1], 150, 175, 25);
    // drawRow(frank[2], 150, 200, 25);
    // drawRow(frank[3], 150, 225, 25);
    // drawRow(frank[4], 150, 250, 25);
    // drawRow(frank[5], 150, 275, 25);

    // first 6 rows of the heart
     i = 0;
     y = 350;
    while (i < heart.length) {
        drawRow(heart[i], 450, y, 15);
        ++i;
        y+= 15;
    }
    // drawRow(heart[0], 450, 350, 15);
    // drawRow(heart[1], 450, 365, 15);
    // drawRow(heart[2], 450, 380, 15);
    // drawRow(heart[3], 450, 395, 15);
    // drawRow(heart[4], 450, 410, 15);
    // drawRow(heart[5], 450, 425, 15);

}

function drawRow (row, topX, topY, pixelWidth) {

    for (let i = 0; i < row.length; i++) {
        //fill('#CCC');
        // colorNum gives us the color of the pixel
        // we are about to draw
        let colorNum = row[i]; // possible values: 0, 1 , 2 , 3 ...
        if (colorNum === 0) {
            noFill()
        } else if (colorNum === 1) {
            fill('violet')
        } else if (colorNum === 2) {
            fill('dimgrey')
        } else {
            fill('yellow')
        }
        square(topX, topY, pixelWidth)
        topX += pixelWidth;
    }
}
