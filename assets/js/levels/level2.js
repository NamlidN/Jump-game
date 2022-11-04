import { Box } from "../objects/Box.js";
import { Player } from '../objects/Player.js';
import { Rectangle } from "../objects/Rectangle.js";

import { Level } from "../Level.js";
import { Goal } from "../objects/Goal.js";


export const Level2 = new Level({
    size: [1200, 1000],
    objects: [
        new Player({
            pos: [1,100],
            size: [50, 50],
            color: "red",
        }),
        new Rectangle({
            pos: [1, 310],
            size: [100, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [100, 330],
            size: [150, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [200, 350],
            size: [360, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [0, 370],
            size: [1150, 10],
            color: 'green',
        }),
        new Box({
            pos: [1090, 200],
            size: [100, 100],
            color: 'blueviolet',
        }),
        new Rectangle({
            pos: [900, 170],
            size: [10, 200],
            color: 'green',
        }),
        new Rectangle({
            pos: [1000, 470],
            size: [200, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [400, 570],
            size: [800, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [280, 380],
            size: [10, 350],
            color: 'blue',
        }),
        new Rectangle({
            pos: [280, 730],
            size: [10, 240],
            color: 'lightblue',
        }),
        new Rectangle({
            pos: [290, 950],
            size: [110, 10],
            color: 'lightblue',
        }),
        new Box({
            pos: [400, 460],
            size: [100, 110],
            color: 'orange',
        }),
        new Rectangle({
            pos: [700, 900],
            size: [300, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [900, 750],
            size: [100, 10],
            color: 'blue',
        }),
        new Goal({
            pos: [1100, 600],
            size: [70, 70],
            color: 'black',
        }),
    ],

});