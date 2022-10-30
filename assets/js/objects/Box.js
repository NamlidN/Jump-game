import { Rectangle } from "./Rectangle.js";
import {levelSize} from  '../Level.js';

export class Box extends Rectangle {
  constructor(options) {
    super(options); //Nimmt die classe von rectangle also die eigentschaften
    this.grav = 0.005; //Gravitation
    this.friction = 0.01; //Reibung
    this.vel = [0,0]; //Geschwindigkeit
    this.acc = 0; // Beschleunigung
    this.onGround = false; //checkt ob am boden liegt
  }
  update(delatTime) {
    this.vel[0] += this.acc * delatTime;
    this.vel[0] *= 1 - this.friction;
    this.vel[1] += this.grav * delatTime;
    this.pos[0] += this.vel[0] * delatTime;
    this.pos[1] += this.vel[1] * delatTime;
    this.onGround = false;
    this.boundToLevel()
  }

boundToLevel() {
    if (this.bottom >= levelSize[1]){
        this.vel[1] = 0;
        this.setBottom(levelSize[1]);
        this.onGround = true

    }
    if(this.left <= 0){
        this.setLeft(0)
        this.vel[0] =0
        // this.vel[0] *= -1 //! macht das man von der wand bounced

    }
    else if ( this.right >= levelSize[0]){
        this.setRight(levelSize[0])
         this.vel[0] = 0
         // this.vel[0] *= -1 //! macht das man von der wand bounced
    }
}

}