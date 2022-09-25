class ThrowableObject extends MoveableObject {

    collidingOffset = {
        'top': 65,
        'right': 45,
        'bottom': 0,
        'left': 45,
    }
    imagesBottle = [
        'img/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    constructor(x, y) {
        super().loadImage('img/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png')
        this.loadImages(this.imagesBottle);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 60;
        this.throw();
        this.animate();
    }

    throw () {
        this.speedY = 23;
        this.applyGravity();

        if (world.character.otherDirection === true) {
            setStopableInterval(() => {
                this.x -= 5.5;
                world.collidingBottleBoss(this);
                world.collidingBottleChicken(this);
            }, 12)
        } else {
            setStopableInterval(() => {
                this.x += 5.5;
                world.collidingBottleBoss(this);
                world.collidingBottleChicken(this);
            }, 12)
        }


    }
    animate() {
        setStopableInterval(() => {
            this.playAnimation(this.imagesBottle);
        }, 45);

    }


}