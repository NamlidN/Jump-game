import { Box } from "../objects/Box.js";
import { Player } from '../objects/Player.js';
import { Rectangle } from "../objects/Rectangle.js";
import { Level } from "../Level.js";
import { Goal } from "../objects/Goal.js";
import { Trampoline } from "../objects/Trampoline.js";


export const Level1 = new Level({
    size: [1200, 1000],
    objects: [
        new Player({
            pos: [100, 600],
            size: [50, 50],
            color: "red",
        }),
        new Trampoline({
            pos: [100, 900],
            size: [100, 5],
            color: ' rgba(250, 0, 208, 0.7)',
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