// import TwoDPos from "./position";

class Cell {
    constructor(pos, isAlive) {
      this.pos = pos
      this.isAlive = isAlive;
    }

    log(){
        console.log("Pos x: " + this.pos.x + ", y: " + this.pos.y);
    }
  }