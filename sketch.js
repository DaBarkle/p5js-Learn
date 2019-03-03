var myC = {
x: 600,
y: 400
}
var ctPoint = {
    x: 300,
    y: 200
}

var x = 0;
var speed = 3;
var y = 100;
function setup() {
    var myCanvas = createCanvas(myC.x, myC.y);
    myCanvas.parent('myContainer');
    frameRate(300);
    
}
function draw(){
    background (0);
    stroke(500);
    cColor();
    strokeWeight(4);
    noFill();
    y = 100;
    y = y + random(100,120);
    ellipse(x ,y,20,20);
    eBounce();
    x = x + speed;

    }


function eBounce(){
    if( x > width){
        speed = -5;

    } else if (x < 0){
        speed = 5
    }
}

function cColor(){
    if(x > width / 2)
    stroke(100);
}