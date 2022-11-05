import { Rectangle } from "./Rectangle.js";

export class Trampoline extends Rectangle{
    constructor (options, type){
        super(options, type || 'Trampoline')
    }
}