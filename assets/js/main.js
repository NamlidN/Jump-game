// import { Rectangle } from "./objects/Rectangle.js";

// const r = new Rectangle({ pos: [10, 10], size: [300, 20], color: "green" }); //definert objekt mit der klasse??
// const s = new Rectangle({ pos: [310, 10], size: [20, 20], color: "blue" }); //definert objekt mit der klasse??

// r.draw();
// s.draw();                 //!Test
// console.log(r.overlapsWith(s))

import { Box } from "./objects/Box.js";
import { Player } from './objects/Player.js';
import { clearCanvas } from "./canvas.js";
import { timer } from "./Timer.js";
import { Rectangle } from "./objects/Rectangle.js";


const objects = [
new Player({
  pos: [100,500],
  size: [50,50],
  color: "red",
}),
new Rectangle({
  pos: [400,900],
  size: [100,10],
  color: 'blue',
}),
new Rectangle({
  pos: [200,600],
  size: [10,100],
  color: 'blue',
}),
new Box({
  pos: [400,800],
  size: [100,100],
  color: 'orange',
}), 
new Rectangle({
  pos: [300,750],
  size: [200,10],
  color: 'blue',
}),
new Rectangle({
  pos: [500,600],
  size: [500,10],
  color: 'green',
}),];



timer.update = (deltaTime) => {
  clearCanvas();
  objects.forEach((obj) => obj.update(deltaTime, objects));
  objects.forEach((obj) => obj.draw());
  // p.update(deltaTime);
  // r.update(deltaTime);
  // p.draw();
  // r.draw();
};
timer.start();
// window.addEventListener("keydown", (e) => {
//   if (e.key === " ") {
//     clearCanvas();
//     b.update(1000 / 60);
//     b.draw();
//   }
// });
//   console.log(b.vel)  //! Fixed :) ist nach rechts gegangen
