const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);

for (let c = 0; c < 9999; c++) {
    strokeWeight(0);
    fill('white');
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * .9 + 0.333;
        circle(x, y, width);
    }
}