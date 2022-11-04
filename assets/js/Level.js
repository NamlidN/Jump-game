import { canvas, clearCanvas } from "./canvas.js";
import { Timer } from "./Timer.js";

const STATUS = {
    READY: 0,
    STARTED: 1,
    PAUSED: 2
};


export class Level {
    constructor(options) {
        this.size = options.size || [canvas.width, canvas.height];
        this.cameraPos = options.cameraPos || [0, this.size[1] - canvas.height];
        this.originalCameraPos = [...this.cameraPos];
        this.objects = [];
        this.objectsOfType = {
            Rectangle: [],
            Player: [],
            Box: [],
            Goal: [],
        };
        this.addObjects(options.objects || []);
        this.player = null;
        this.timer = new Timer();
        this.timer.update = (deltaTime) => this.update(deltaTime);
        this.status = STATUS.READY;
        this.won = false;
        this.keyFuncRef = (e) => this.keyFunktion(e);
    }
    addControls() {
        window.addEventListener('keydown', this.keyFuncRef);
    }
    removeControls() {
        window.removeEventListener('keydown', this.keyFuncRef);

    }

    keyFunktion(e) {
        if (e.key === "p") {
            if (this.status === STATUS.READY) {
                this.start();
            }else if (this.status === STATUS.STARTED){
                this.pause()
            }else if(this.status === STATUS.PAUSED){
                this.resume()
            }
        }else if (e.key === "r" && this.status === STATUS.STARTED){
            this.reset()
        }
    }





    addObjects(objects) {

        objects.forEach((obj) => this.addObject(obj));
    }
    addObject(obj) {
        const type = obj.type;
        this.objects.push(obj);
        this.objectsOfType[type].push(obj);
        obj.level = this;
    }
    //!____-----------------------------------------
    update(deltaTime) {
        console.log('object');
        clearCanvas();
        this.updateObjects(deltaTime);
        this.updateCamera();
        this.drawObjects();
        this.checkWin();
    }
    updateObjects(deltaTime) {
        this.objects.forEach((obj) => obj.update(deltaTime));
    }

    updateCamera() {

        this.cameraPos[0] = Math.max(
            0,
            Math.min(this.size[0] - canvas.width, this.player.right - canvas.width / 2));

        this.cameraPos[1] = Math.max(
            0,
            Math.min(this.size[1] - canvas.height, this.player.top - canvas.height / 2));


    }
    //Todo-------------------------------------------------
    drawObjects() {

        this.objects.forEach((obj) => obj.draw());

    }
    //todo------------___-----___---__---__--__-___-------_--_-___-
    checkWin() {
        if (!this.won) return; {
            this.status = STARTED.PAUSED;
            this.timer.pause();
            this.removeControls();
        }
    }
    start() {
        this.player = this.objectsOfType.Player[0];
        this.status = STATUS.STARTED;
        this.timer.paused = false;
        this.timer.start();
    }

    //!------------------------------------------------
 pause(){
    this.status = STATUS.PAUSED
    this.timer.pause()
 }
 resume(){
    this.status = STATUS.STARTED;
    this.timer.paused = false;
    this.timer.start();
 }

reset(){
    this.objects.forEach(obj => obj.reset());
    this.cameraPos = [...this.originalCameraPos];
}




}