import { Box } from "../objects/Box.js";
import { Player } from '../objects/Player.js';
import { Rectangle } from "../objects/Rectangle.js";
import { Level } from "../Level.js";
import { Goal } from "../objects/Goal.js";


export const Level1 = new Level({
    size: [1200, 1000],
    objects: [
        new Player({
            pos: [100, 600],
            size: [50, 50],
            color: "red",
        }),
        new Box({
            pos: [400, 700],
            size: [50, 110],
            color: 'orange',
        }),
        new Rectangle({
            pos: [700, 700],
            size: [200, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [200, 500],
            size: [200, 10],
            color: 'blue',
        }),
        new Goal({
            pos: [100, 410],
            size: [70, 70],
            color: 'black',
        }),
    ],

});