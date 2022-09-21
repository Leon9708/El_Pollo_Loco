class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    bottleCollision;
    currentTime;
    coinBar = new Coinbar();
    statusBar = new Statusbar();
    bottleBar = new Bottlebar();
    endBossBar = new Endbossbar();
    audio = new Audios();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
        this.audio.setAudio();
    }



    run() {
        setStopableInterval(() => {
            this.checkCollisions();
            this.checkCollisionsBoss();
            this.checkThrowObjects();
            this.collectObjects();
        }, 1000 / 20);
    }

    checkThrowObjects() {
        if (this.keyboard.d) {
            this.character.throwAgain();
            if (this.character.throwDelay === true) {
                if (this.character.bottleLeft() === true) {
                    this.audio.throw_sound.play();
                    this.bottleCollision = true;
                    let bottle = new ThrowableObject(this.character.x, this.character.y);
                    this.throwableObjects.push(bottle);
                }
                this.character.throw();
                this.bottleBar.setBottles(this.character.bottles);
                this.character.throwDelay = false;
            }
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.collidChicken();
                this.statusBar.setLife(this.character.energy);
            }
        });
    }
    checkCollisionsBoss() {
        this.level.endboss.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('collsionendboss')
                this.character.collidBoss();
                this.statusBar.setLife(this.character.energy);
            }
        });
    }

    collidingBottleChicken(bottle) {
        this.level.enemies.forEach((enemy) => {
            if (bottle.isColliding(enemy) && this.bottleCollision == true) {
                this.bottleCollision = false;
                enemy.killChicken();
                let i = this.level.enemies.indexOf(enemy);
                setTimeout(() => {
                    this.level.enemies.splice(i, 1);
                }, 500);
            }
        })
    }
    collidingBottleBoss(bottle) {
        this.level.endboss.forEach((enemy) => {
            if (bottle.isColliding(enemy) && this.bottleCollision == true) {
                enemy.hitAgain();
                console.log(enemy.hitDelay)
                if (enemy.hitDelay == true) {
                    this.bottleCollision = false;
                    enemy.hitBoss();
                    this.endBossBar.setBossLife(enemy.bossEnergy);
                }
                enemy.hitDelay = false;
            }
        })
    }


    collectObjects() {
        this.collectBottles();
        this.collectCoins();

    }
    collectBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.collectBottles();
                let i = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(i, 1);
                this.bottleBar.setBottles(this.character.bottles);;
            }
        });
    }

    collectCoins() {
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin)) {
                this.audio.coin_sound.play();
                this.character.collectCoins(coin);
                let i = this.level.coins.indexOf(coin);
                this.level.coins.splice(i, 1);
                this.coinBar.setCoins(this.character.coins);
                this.statusBar.setLife(this.character.energy);
            }
        });
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addMovableObjects()
        this.ctx.translate(-this.camera_x, 0);
        this.addStaticObjects();

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addMovableObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
    }

    addStaticObjects() {
        this.addToMap(this.character);
        this.addToMap(this.coinBar);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.endBossBar);
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