class ThrowableObject extends MoveableObject {

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

    throw (x, y) {
        this.speedY = 23;
        this.applyGravity();
        setInterval(() => {
            this.x += 6;
            world.bottleCollision(this);
        }, 12)
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesBottle);
        }, 45);

    }


}