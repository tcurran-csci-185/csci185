let x = 100;
let y = 200;
let width = 100;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    // TODO:
    // left arrow moves circle left
    // right arrow moves circle right
    // down arrow moves circle down

     // up arrow moves circle up
    if(ev.code == 'ArrowUp') {
        y = y - 10;
    } else if (ev.code == 'ArrowDown') {
        y = y + 10;
    } else if (ev.code == 'ArrowLeft') {
        x = x - 10;
    } else if (ev.code == 'ArrowRight') {
        x = x + 10;
    } else if (ev.code == 'KeyR') {
        fillColor = 'red'
    } else if (ev.code == 'KeyP') {
        fillColor = 'purple'
    // } else if (ev.code == 'ArrowRight' + 'ArrowUp' ) {
    //     x = x - 10;
    //     y = y + 10;
    }

    fill(fillColor);
    // redraw circle:
    clear();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
