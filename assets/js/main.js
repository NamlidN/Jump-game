// import { Rectangle } from "./objects/Rectangle.js";

// const r = new Rectangle({ pos: [10, 10], size: [300, 20], color: "green" }); //definert objekt mit der klasse??
// const s = new Rectangle({ pos: [310, 10], size: [20, 20], color: "blue" }); //definert objekt mit der klasse??

// r.draw();
// s.draw();                 //!Test
// console.log(r.overlapsWith(s))

import { Box } from "./objects/Box.js";
import { clearCanvas } from "./canvas.js";
import { timer } from "./Timer.js";
const b = new Box({
  pos: [100, 100],
  size: [100, 100],
  color: "red",
});

b.draw();      

b.vel = [0.2, -0.7];

timer.update = (deltaTime) => {
    clearCanvas();
    b.update(deltaTime);
    b.draw();
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
