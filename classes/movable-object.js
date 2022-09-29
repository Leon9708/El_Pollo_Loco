class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    accleration = 2.5;
    lastTime = 0;
    hitBossLastTime = 0;
    i = 0;
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

    setHit(energy) {
        if (energy <= 0) {
            world.character.energy = 0;
        } else {
            world.character.lastHit = new Date().getTime();
        }
    }

    throw () {
        this.bottles -= 1;
        if (this.bottles <= 0) {
            this.bottles = 0;
        }
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
            if (this.world.character.energy >= 1) {
                this.world.audio.lifePlus_sound.play();
                this.world.character.energy += 15;
            }
        }
    }

    hitAgain() {
        let now = new Date().getTime();
        if (now - this.hitBossLastTime >= 3000) {
            this.hitDelay = true;
            this.hitBossLastTime = now;
        }
    }

    isHurt(lastHit) {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead(energy) {
        return energy === 0;
    }

}