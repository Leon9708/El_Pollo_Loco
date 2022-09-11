class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit()
                }
            });
        }, 1000 / 20);
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addToMap(this.statusBar);

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
            this.flipImage(moveObj);
        }
        moveObj.draw(this.ctx);
        moveObj.drawFrame(this.ctx);

        if (moveObj.otherDirection) {
            this.flipImageBack(moveObj);
        }
    }

    flipImage(moveObj) {
        this.ctx.save();
        this.ctx.translate(moveObj.width, 0);
        this.ctx.scale(-1, 1);
        moveObj.x = moveObj.x * -1;;

    }
    flipImageBack(moveObj) {
        moveObj.x = moveObj.x * -1;

    }


}