let cell;
var status = 0;

let currentTick = 0;
let tickRate = 500;

let cellSize = 10
let gridSize = 40

function setup() {
  createCanvas(cellSize * gridSize, cellSize * gridSize);
  // initialize grid with default values
}

function draw() {
  controlTime();
}

function controlTime() {
  if(currentTick > tickRate){
    tick();
    currentTick = 0;
  }else {
    currentTick++;
  }
}

function tick(){
  console.log("Running");
  // create n cells 
  // display grid

  // let pos = new TwoDPos(20, 30);
  // let cellOne = new Cell(pos, true);
  // let cellTwo = new Cell(new TwoDPos(50,60), false);
  // cellOne.log();
  // cellTwo.log();
}







