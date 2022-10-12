function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    counter = 0;
    while (counter < 200) {
        if (counter % 2 == 0) {
        fill('black');
        }else if (counter % 3 == 1){
        fill('skyblue')
        }
        circle(canvasWidth / 2, 200 + counter*10, 2*counter)
        circle(400 - counter*6, 200 +counter*10, 100 + 6*counter)
        circle(200 + counter*2,200 + counter* 2,200 + counter*2)
        circle(canvasWidth / 100 + counter*10,0* counter*50)
        counter++ 
    }

    // while (counter < 10) {
    //     circle(counter*5, counter*5, counter*5)
    //     counter++
    // }
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
