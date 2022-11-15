// TO DO: SEND IT
// I think this could be organized better...

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight - 10; 

const face = [
    { centerX: canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'white',secondaryColor: 'black'},
    { centerX: canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'black',secondaryColor: 'white'},
    { centerX: 0 + canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'black',secondaryColor: 'white'},
    { centerX: 0 + canvasWidth, centerY: canvasHeight/2, size: 100, primaryColor: 'black',secondaryColor: 'white'},    
]

const nonagon = [
    { x: canvasWidth/3, y: canvasHeight/3, radius: 99, npoints: 9, fillColor:'#8002d5'},
    { x: canvasWidth - canvasWidth/3, y: canvasHeight/3, radius: 99, npoints:9, fillColor:'#E66000'},
    { x: canvasWidth - canvasWidth/2, y: canvasHeight - canvasHeight/9, radius:99, npoints:9, fillColor:'#FFCB00'},
]

async function setup() {
    createCanvas(canvasWidth, canvasHeight);

    for (let c = 0; c < 333; c++) {
        strokeWeight(0);
            const x = Math.random() * canvasWidth;
            const y = Math.random() * canvasHeight;
            const radius = Math.random() * 6;
            drawLandscapeObject(x, y, radius, 5, '#00539F');
        }
        for (let c = 0; c < 333; c++) {
            strokeWeight(0);
                const x = Math.random() * canvasWidth;
                const y = Math.random() * canvasHeight;
                const radius = Math.random() * 3;
                drawLandscapeObject(x, y, radius, 6, '#0095DD');
            }
            for (let c = 0; c < 333; c++) {
                strokeWeight(0);
                    const x = Math.random() * canvasWidth;
                    const y = Math.random() * canvasHeight;
                    const radius = Math.random() * 3;
                    drawLandscapeObject(x, y, radius, 7, '#002147');
                }
    
    drawLandscapeObject(canvasWidth/2, canvasHeight/2, 333, 9, '#000');
}

c = 0;
let warp = 60

function mouseDragged() {
    warp = 1 + mouseX / 10; 
    if (warp == 1){
        console.log('minwarp');
    }
}

function keyLog(ev) {
    console.log(ev.code);
    if (ev.code == 'KeyW') {
        console.log('warpUp');
        if (warp <= 360){
            warp = warp + 3;
        } else if (warp >= 360){
            warp = 360 
            console.log('max warp')
        }
    } else if (ev.code == 'KeyS') {
        console.log('warpDown');
        if (warp > 15){
            warp = warp - 3;
        } else if (warp < 15){
            warp = 15 }
    } else if (ev.code == 'ArrowUp') {
        console.log('grow');
        if (face[0].size<= 99)
        face[0].size = face[0].size + 1 ;
        if (face[1].size<= 99)
        face[1].size = face[0].size + 1 ;
        if (face[2].size<= 99)
        face[2].size = face[0].size + 1 ;
        if (face[3].size<= 99)
        face[3].size = face[0].size + 1 ;
    } else if (ev.code == 'ArrowDown') {
        console.log('shrink');
        if (face[0].size > 3)
        face[0].size = face[0].size - 1 ;
        if (face[1].size > 3)
        face[1].size = face[0].size - 1 ;
        if (face[2].size > 3)
        face[2].size = face[0].size - 1 ;
        if (face[3].size > 3)
        face[3].size = face[0].size - 1 ;
    } else if (ev.code == 'KeyI'){
        drawCreature(face[0].centerX, face[0].centerY, face[0].size);
        face[0].centerY += 5 * Math.cos(c / 9);
        face[0].centerX += 9;
    
        drawCreature(face[1].centerX, face[1].centerY, face[1].size);
        face[1].centerY += 5 * -Math.cos(c / 9);
        face[1].centerX += 9;
    
        drawCreature(face[2].centerX, face[2].centerY, face[2].size);
        face[2].centerY += 5 * -Math.cos(c / 9);
        face[2].centerX += -9;
        
        drawCreature(face[3].centerX, face[3].centerY, face[3].size);
        face[3].centerY += 5 * Math.cos(c / 9);
        face[3].centerX += -9;
    }
}

function draw() {

    frameRate(warp)

    drawCreature(face[0].centerX, face[0].centerY, face[0].size);
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

    drawLandscapeObject(nonagon[0].x, nonagon[0].y, nonagon[0].radius, nonagon[0].npoints, nonagon[0].fillColor);
  
    drawLandscapeObject(nonagon[1].x, nonagon[1].y, nonagon[1].radius, nonagon[1].npoints, nonagon[1].fillColor);

    drawLandscapeObject(nonagon[2].x, nonagon[2].y, nonagon[2].radius, nonagon[2].npoints, nonagon[2].fillColor);

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

    c++;
    console.log(warp)
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

function drawLandscapeObject(x, y, radius, npoints, fillColor="white") {
    
    let angle = TWO_PI / npoints;
    
    fill(fillColor)
    
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    
    }
    endShape(CLOSE);
}

document.addEventListener('keydown', keyLog);