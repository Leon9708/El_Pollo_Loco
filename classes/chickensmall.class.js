class ChickenSmall extends MoveableObject {

    height = 30;
    width = 55;
    y = 395;
    imagesWalking = [
        'img/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]
    imageDead = 'img/img/3_enemies_chicken/chicken_small/2_dead/dead.png';


    constructor() {
        super().loadImage('img/img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 500 + Math.random() * 4200;
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
            if (this.chickenDead == true) {
                this.loadImage(this.imageDead);
            } else {
                this.playAnimation(this.imagesWalking);
            }
        }, 100)

    }
}