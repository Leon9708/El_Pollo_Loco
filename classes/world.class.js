class World {

    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(moveObj) {
        if (moveObj.otherDirection) {
            this.ctx.save();
            this.ctx.translate(moveObj.width, 0)
            this.ctx.scale(-1, 1)
            moveObj.x = moveObj.x * -1;
        }
        this.ctx.drawImage(moveObj.img, moveObj.x, moveObj.y, moveObj.width, moveObj.height);
        if (moveObj.otherDirection) {
            moveObj.x = moveObj.x * -1;
            this.ctx.restore();
        }
    }
}