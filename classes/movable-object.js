class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    accleration = 2.5;
    energy = 100;
    lastHit = 0;
    lastTime = 0;
    allowedToThrow = false;
    otherDirection = false;
    gameOver = true;
    world;



    applyGravity() {
        setInterval(() => {
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
        let i = 0
        if (i === images.length) {
            this.loadImage(images[images.length])
            this.gameOver = false;
        } else {
            let path = images[i];
            this.img = this.imageCache[path];
            i++;
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
        return this.x + this.width > obj.x &&
            this.y + this.height > obj.y &&
            this.x < obj.x &&
            this.y < obj.y + obj.height
    }

    hit() {
        this.energy -= 4;
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

    throwcheck() {
        if (this.bottles >= 1)
            return true;
    }

    throwAgain() {
        let now = new Date().getTime();
        if (now - this.lastTime >= 1000) {
            this.allowedToThrow = true
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
            if (energy >= 1) {
                this.energy += 20;
            }
        }
    }


    isDead() {
        return this.energy === 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1.5;
    }
}