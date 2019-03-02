var myCanvas = {
x: 600,
y: 400
}


function setup() {
    var myCanvas = createCanvas(myCanvas.x, myCanvas.y);
    background(100);
    myCanvas.parent('myContainer');
    frameRate(300);
}