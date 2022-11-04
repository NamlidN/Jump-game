import { Rectangle } from "./Rectangle.js";


export class Box extends Rectangle {
    constructor(options, type) {
        const { pos, size, color, grav, friction, vel } = options;
        super({ pos, size, color }, type || 'Box'); //Nimmt die classe von rectangle also die eigentschaften
        this.grav = grav || 0.005; //Gravitation
        this.friction = friction || 0; //Reibung
        this.vel = vel || [0, 0]; //Geschwindigkeit
        this.acc = 0; // Beschleunigung
        this.onGround = false; //checkt ob am boden liegt
        this.ppos = [...this.pos];
    }
    get prevLeft() {
        return this.ppos[0];
    }
    get prevRight() {
        return this.ppos[0] + this.size[0];
    }

    get prevTop() {
        return this.ppos[1];
    }

    get prevBottom() {
        return this.ppos[1] + this.size[1];

    }

    applyPhysics(deltaTime) {
        this.vel[0] += this.acc * deltaTime;
        this.vel[0] *= 1 - this.friction;
        this.vel[1] += this.grav * deltaTime;
        this.pos[0] += this.vel[0] * deltaTime;
        this.pos[1] += this.vel[1] * deltaTime;
        this.onGround = false;
        //kopie von pos für ppos
    }
    update(deltaTime) {
        this.ppos = [...this.pos];
        this.applyPhysics(deltaTime);
        this.level.objects.forEach((obj) => {
            if(obj.type === 'Goal')return;
            this.collideWith(obj).fromAbove();
            this.collideWith(obj).fromBelow();
            this.collideWith(obj).fromLeft();
            this.collideWith(obj).fromRight();
        });
        this.boundToLevel();
        this.checkGoal();
    }
checkGoal(){
    //
}
    push() {
        return {
            toLeft: () => false,
            toRight: () => false,
        };
    }

    collideWith(obj) {
        return {
            fromAbove: () => {
                if (this.prevBottom <= obj.top && this.overlapsWith(obj)) {
                    this.setBottom(obj.top);
                    this.vel[1] = 0;
                    this.onGround = true;
                }
            },

            fromBelow: () => {
                if (this.prevTop >= obj.bottom && this.overlapsWith(obj)) {
                    this.setTop(obj.bottom);
                    this.vel[1] = 0;
                }
            },

            fromLeft: () => {
                if (this.prevRight <= obj.left && this.overlapsWith(obj)) {
                    if (this.push(obj).toRight()) return;
                    this.setRight(obj.left);
                    this.vel[0] = 0;
                }
            },

            fromRight: () => {
                if (this.prevLeft >= obj.right && this.overlapsWith(obj)) {
                    if (this.push(obj).toLeft()) return;
                    this.setLeft(obj.right);
                    this.vel[0] = 0;
                }
            },

        };
    }
    boundToLevel() {
        if (this.bottom >= this.level.size[1]) {
            this.vel[1] = 0;
            this.setBottom(this.level.size[1]);
            this.onGround = true;

        }
        if (this.left <= 0) {
            this.setLeft(0);
            this.vel[0] = 1;
            // this.vel[0] *= -1 //! macht das man von der wand bounced

        } else if (this.right >= this.level.size[0]) {
            this.setRight(this.level.size[0]);
            this.vel[0] = -1;
            // this.vel[0] *= -1 //! macht das man von der wand bounced
        }
    }

    canBeMoved(offset) {
        if (
            this.left + offset[0] < 0 ||
            this.right + offset[0] > this.level.size[0] ||
            this.top + offset[1] < 0 ||
            this.bottom + offset[1] > this.level.size[1]
        ) {
            return false;
        }
        return[
            ...this.level.objectsOfType.Rectangle,
            ...this.level.objectsOfType.Box]
            .every((obj) => !this.overlapsWith(obj, offset));
    }

    getDistanceToLeftObject() {
        let d = this.left;
       [...this.level.objectsOfType.Rectangle,...this.level.objectsOfType.Box]
            .forEach((obj) => {
                if (
                    this.left >= obj.right &&
                    this.bottom > obj.top &&
                    this.top < obj.bottom
                ) {
                    d = Math.min(d, this.left - obj.right);
                }
            });
        return d;
    }
    getDistanceToRightObject() {
        let d = this.level.size[0] - this.right;
        [...this.level.objectsOfType.Rectangle,...this.level.objectsOfType.Box]

            .forEach((obj) => {
                if (
                    this.right <= obj.left &&
                    this.bottom > obj.top &&
                    this.top < obj.bottom
                ) {
                    d = Math.min(d, obj.left - this.right);
                }
            });
        return d;
    }
}