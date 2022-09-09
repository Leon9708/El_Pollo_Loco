class Chicken extends MoveableObject {

    height = 60;
    width = 85;
    y = 365;
    imagesWalking = [
        'img/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]


    constructor() {
        super().loadImage('img/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 300 + Math.random() * 1800;
        this.loadImages(this.imagesWalking);
        this.speed = 0.15 + Math.random() * 0.75;
        this.animate();
        this.moveLeft();
    }
    animate() {

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.imagesWalking)
        }, 100)
    }
}