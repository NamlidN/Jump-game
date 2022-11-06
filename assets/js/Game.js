import { Level1 } from './levels/level1.js';
import { Level2 } from './levels/level2.js';
import { Level3 } from './levels/level3.js';
import { Level4 } from './levels/level4.js';
import { writeInfo } from './info.js';


const levelCount = document.getElementById('levelCount');
export class Game {
    constructor(levelList) {
        this.levelList = [];
        for (const lev of levelList) {
            this.levelList.push(lev);
            lev.game = this;
            lev.index = this.levelList.length;
        }
        this.currentLevelIndex = 1;
    }
    get currentLevel() {
        return this.levelList[this.currentLevelIndex - 1];
    }
    start() {
        if (this.levelList.length === 0) return;
        this.currentLevel.drawObjects();
        this.currentLevel.addControls();
        levelCount.innerText = 'Level' + this.currentLevelIndex;
       writeInfo('LINKS: A //⟻' + '<br>' +' RECHTS: D //⟼'+'<br>' + 'SPRINGEN: ⇧//Space'+ '<br>' +'R = Reset'+ '<br>'+ 'P = Pause//Start '); //!toggle
    }
    switchToNextLevel() {
        this.currentLevelIndex++;
        if (this.currentLevelIndex > this.levelList.length) {
            writeInfo('Geschafft! :)');
            return;
        }
        this.currentLevel.drawObjects();
        this.currentLevel.start();
        this.currentLevel.addControls(); //! Fixeed konnte nur in lvl1 pausieren und reseten
        levelCount.innerText = 'Level ' + this.currentLevelIndex;

    }
}

export const game = new Game([Level1, Level2, Level3, Level4]);