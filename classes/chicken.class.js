class Chicken extends MoveableObject {

    height = 70;
    y = 365;
    imagesWalking = [
        'img/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]


    constructor() {
        super().loadImage('img/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 100 + Math.random() * 500;
        this.loadImages(this.imagesWalking);
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
        this.moveLeft();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesWalking)
        }, 100)
    }
}