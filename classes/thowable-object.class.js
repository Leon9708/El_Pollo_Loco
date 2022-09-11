class ThrowableObject extends MoveableObject {

    constructor(x, y) {
        super().loadImage('img/img/6_salsa_bottle/salsa_bottle.png')
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 60;
        this.throw();
    }

    throw (x, y) {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 20)
    }
}