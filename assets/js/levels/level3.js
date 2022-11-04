import { Box } from "../objects/Box.js";
import { Player } from '../objects/Player.js';
import { Rectangle } from "../objects/Rectangle.js";
import { Level } from "../Level.js";
import { Goal } from "../objects/Goal.js";


export const Level3 = new Level({
    size: [1200, 1000],
    objects: [
        new Player({
            pos: [100, 500],
            size: [50, 50],
            color: "red",
        }),
        new Rectangle({
            pos: [440, 850],
            size: [100, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [200, 850],
            size: [10, 100],
            color: 'blue',
        }),
        new Rectangle({
            pos: [200, 550],
            size: [20, 200],
            color: 'blue',
        }),
        new Box({
            pos: [400, 700],
            size: [50, 110],
            color: 'orange',
        }),
        new Rectangle({
            pos: [300, 650],
            size: [200, 10],
            color: 'blue',
        }),
        new Rectangle({
            pos: [500, 350],
            size: [500, 10],
            color: 'green',
        }),
        new Box({
            pos: [600, 150],
            size: [100, 150],
            color: 'blueviolet',
        }),
        new Rectangle({
            pos: [500, 350],
            size: [500, 10],
            color: 'green',
        }),
        new Rectangle({
            pos: [1180, 0],
            size: [50, 1000],
            color: 'blue',
        }),   
         new Rectangle({
            pos: [300, 650],
            size: [200, 10],
            color: 'blue',
        }), 
        new Rectangle({
            pos: [300, 650],
            size: [200, 10],
            color: 'blue',
        }),
         new Rectangle({
            pos: [760, 350],
            size: [10, 200],
            color: 'blue',
        }),
        new Goal({
            pos: [800, 410],
            size: [70, 70],
            color: 'black',
        }),
    ],

});