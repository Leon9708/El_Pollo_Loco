class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    coinBar = new Coinbar();
    statusBar = new Statusbar();
    bottleBar = new Bottlebar();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();

    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000 / 20);
        setInterval(() => {
            this.collectObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.d && this.keyboard.rightHold == true) {
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            if (this.character.throwcheck() === true) {
                this.throwableObjects.push(bottle);
            }
            this.character.throw();
            this.bottleBar.setBottles(this.character.bottles);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setLife(this.character.energy);
            }
        });
    }

    collectObjects() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottles();
                let i = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(i, 1);
                this.bottleBar.setBottles(this.character.bottles);
            }
        });
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins(coin);
                let i = this.level.coins.indexOf(coin);
                this.level.coins.splice(i, 1);
                this.coinBar.setCoins(this.character.coins);
            }
        });
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.coinBar);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);

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
        this.ctx.restore();
    }
}