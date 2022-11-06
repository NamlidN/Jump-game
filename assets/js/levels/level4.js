
import { Box } from "../objects/Box.js";
import { Player } from '../objects/Player.js';
import { Rectangle } from "../objects/Rectangle.js";
import { Level } from "../Level.js";
import { Goal } from "../objects/Goal.js";
import { Trampoline } from "../objects/Trampoline.js";
import { Tele1 } from "../objects/Tele1.js";
import { Tele2 } from "../objects/Tele2.js";

export const Level4 = new Level({
    size: [1200, 1500],
    objects: [
        new Player({
            pos: [60, 1400],
            size: [50, 50],
            color: "red",
        }),
        new Trampoline({
            pos: [0, 1499],
            size: [1200, 5],
            color: ' rgba(250, 0, 208, 0.7)',
        }),
        new Box({
            pos: [400, 1200],
            size: [50, 110],
            color: 'orange',
        }), 
            new Box({
            pos: [600, 400],
            size: [50, 110],
            color: 'orange',
        }),
        new Trampoline({
            pos: [700, 1200],
            size: [200, 10],
            color: ' rgba(250, 0, 208, 0.7)',
        }),
        new Tele2({
            pos: [200, 1000],
            size: [400, 10],
            color: 'darkgreen',
        }),
        new Trampoline({
            pos: [500, 850],
            size: [200, 10],
            color: ' rgba(250, 0, 208, 0.7)',
        }),
        new Tele1({
            pos: [800, 650],
            size: [200, 10],
            color: 'green',
        }),
        new Rectangle({
            pos: [0, 300],
            size: [1000, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [1000, 300],
            size: [10, 100],
            color: 'blue',
        }),
        new Rectangle({
            pos: [1000, 400],
            size: [200, 10],
            color: 'blue',
        }),
        new Tele2({
            pos: [90, 190],
            size: [340, 10],
            color: 'darkgreen',
        }),
        new Tele2({
            pos: [430, 190],
            size: [10, 110],
            color: 'darkgreen',
        }),
        new Tele2({
            pos: [90, 190],
            size: [10, 60],
            color: 'darkgreen',
        }),
        // new Tele2({
        //     pos: [110, 190],
        //     size: [10, 60],
        //     color: 'darkgreen',
        // }),
        // new Tele2({
        //     pos: [20, 300],
        //     size: [200, 50],
        //     color: 'green',
        // }),
        new Goal({
            pos: [355, 225],
            size: [70, 70],
            color: 'black',
        }),
    ],
})