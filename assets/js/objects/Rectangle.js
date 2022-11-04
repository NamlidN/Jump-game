import { ctx } from "../canvas.js";

// const r = new Rectangle({ pos: [10, 10], size: [300, 20], color: "green" });
//definert objekt mit der klasse??

export class Rectangle {
  constructor(options, type) {
    this.level = null;
    this.pos = options.pos;
    this.size = options.size;
    this.color = options.color;
    this.type = type || "Rectangle";
    this.originalPos = [...this.pos];
  }

  get left() {
    return this.pos[0]; //Gitbt den linken rand aus
  }
  get right() {
    return this.pos[0] + this.size[0]; //Gitbt den Rechten rand aus
  }
  get top() {
    return this.pos[1]; //Gitbt den linken rand aus
  }
  get bottom() {
    return this.pos[1] + this.size[1]; //Gitbt den Rechten rand aus
  }

  setLeft(val) {
    this.pos[0] = val;
  }

  setRight(val) {
    this.pos[0] = val - this.size[0];
  }
  setTop(val) {
    this.pos[1] = val;
  }

  setBottom(val) {
    this.pos[1] = val - this.size[1];
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.pos[0] - this.level.cameraPos[0],
      this.pos[1] - this.level.cameraPos[1],
      this.size[0],
      this.size[1]);
  }

  overlapsWith(obj, offset = [0, 0]) {
    if (this === obj) return false;
    return (
      this.left + offset[0] < obj.right &&
      this.right + offset[0] > obj.left &&
      this.bottom + offset[1] > obj.top &&
      this.top + offset[1] < obj.bottom
    );
  }

  update() {
    //
  }

  reset(){
    this.pos = [...this.originalPos];
  }
}
