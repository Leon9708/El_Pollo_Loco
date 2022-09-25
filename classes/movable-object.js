class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    accleration = 2.5;
    energy = 100;
    bossEnergy = 100;
    lastHit = 0;
    bossLastHit = 0;
    lastTime = 0;
    energyBoss = 100;
    hitBossLastTime = 0;
    i = 0;
    win = false;
    throwDelay = false;
    hitDelay = false;
    chickenDead = false;
    collidingOffset = {
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0,
    }




    applyGravity() {
        setStopableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.accleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 160;
        }

    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationDead(images) {
        if (this.i === images.length) {
            this.loadImage(images[this.i]);
        } else {
            let path = images[this.i];
            this.img = this.imageCache[path];
            this.i++;
        }
    }


    jump() {
        this.speedY = 27.5;
    }


    moveRight() {
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;


    }

    isColliding(obj) {
        return (this.x + this.width - this.collidingOffset.right) >= obj.x &&
            (this.y + this.height - this.collidingOffset.bottom) >= obj.y &&
            (this.x + this.collidingOffset.left) <= (obj.x + obj.width) &&
            (this.y + this.collidingOffset.top) <= (obj.y + obj.height)

    }

    collidChicken() {
        this.energy -= 5;
        this.world.audio.ouch_sound.play();
        this.setHit();

    }
    collidBoss() {
        this.energy -= 100;
        this.setHit();
    }
    setHit() {
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    throw () {
        this.bottles -= 1;
        if (this.bottles <= 0) {
            this.bottles = 0;
        }
    }

    bottleLeft() {
        if (this.bottles >= 1)
            return true;
    }

    throwAgain() {
        let now = new Date().getTime();
        if (now - this.lastTime >= 1000) {
            this.throwDelay = true
            this.lastTime = now;
        }
    }


    collectBottles() {
        this.bottles += 1;
        if (this.bottles >= 10)
            this.bottles = 10;
    }

    collectCoins() {
        this.coins += 1;
        if (this.coins === 5) {
            this.coins = 0;
            if (this.energy >= 1) {
                this.world.audio.lifePlus_sound.play();
                this.energy += 15;
            }
        }
    }

    hitBoss() {
        this.bossEnergy -= 20;
        if (this.bossEnergy <= 0) {
            this.bossEnergy = 0;
        } else {
            this.bossLastHit = new Date().getTime();
        }
    }

    hitAgain() {
        let now = new Date().getTime();
        if (now - this.hitBossLastTime >= 3000) {
            this.hitDelay = true;
            this.hitBossLastTime = now;
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - (this.lastHit);
        timepassed = timepassed / 1000;
        return timepassed < 1.5;
    }

    bossIsHurt() {
        let timepassed = new Date().getTime() - this.bossLastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy === 0;
    }

    bossIsDead() {
        return this.bossEnergy === 0;
    }
    bossJump() {
        setTimeout(() => {
            this.speedY = 27.5;
            setInterval(() => {
                if (this.isAboveGround()) {
                    this.x -= this.speed
                }
            }, 50);
        }, 1000);
    }


    gameOverScreen() {
        stopInterval();
        this.walking_sound.pause();
        music_sound.pause();
        setTimeout(() => {
            if (this.win === true) {
                document.getElementById('gameover_win').classList.remove('d-none');
            } else {
                document.getElementById('gameover_lose').classList.remove('d-none');
            }
        }, 1000);
        setTimeout(() => {
            document.getElementById('background').classList.remove('d-none');
            this.world.audio.resetAudio();
        }, 7500);

    }



}