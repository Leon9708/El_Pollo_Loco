class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    accleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.accleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 160;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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
        this.energy -= 10
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1.5;
    }
}